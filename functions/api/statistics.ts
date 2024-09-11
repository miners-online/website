import { D1Database } from "@cloudflare/workers-types";

interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const uuid = url.pathname.split('/')[2];
    const gameName = url.pathname.split('/')[4];
    const statName = url.pathname.split('/')[6];

		const token = request.headers.get('Authorization');
		if (!token) {
			return new Response('Unauthorized', { status: 401 });
		}
		
		const authClient = await getClientForToken(token, env);
		if (!authClient) {
			return new Response('Invalid token', { status: 403 });
		}
		
		switch (request.method) {
			case 'POST':
				if (statName && await hasPermission(token, `statistics.${gameName}.write`, env)) {
					const body = await request.json();
					return await setPlayerStatistic(uuid, gameName, statName, body.value, env);
				}
				break;
			case 'GET':
				if (gameName && await hasPermission(token, `statistics.${gameName}.read`, env)) {
					return await getPlayerGameStats(uuid, gameName, env);
				}
				break;
			case 'DELETE':
				if (statName && await hasPermission(token, `statistics.${gameName}.delete`, env)) {
					return await deletePlayerStatistic(uuid, gameName, statName, env);
				}
				break;
			default:
				return new Response('Method Not Allowed', { status: 405 });
		}
		return new Response('Forbidden', { status: 403 });
  },
};

// Query the database to get client information based on token
async function getClientForToken(token: string, env: Env): Promise<any> {
  const query = `
    SELECT clients.* FROM clients
    JOIN tokens ON tokens.client_id = clients.id
    WHERE tokens.token = ?`;
  const result = await env.DB.prepare(query).bind(token).first();
  return result;
}

// Check permissions for a specific token
async function hasPermission(token: string, requiredPermission: string, env: Env): Promise<boolean> {
  const query = `
    SELECT 1 FROM permissions
    JOIN tokens ON permissions.token_id = tokens.id
    WHERE tokens.token = ? AND permissions.permission = ?`;
  const result = await env.DB.prepare(query).bind(token, requiredPermission).first();
  return !!result;
}

// Player statistics operations
async function setPlayerStatistic(uuid: string, gameName: string, statName: string, value: string, env: Env): Promise<Response> {
  const query = `
    INSERT INTO player_statistics (uuid, game_name, stat_name, value)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(uuid, game_name, stat_name) DO UPDATE SET value = excluded.value`;
  await env.DB.prepare(query).bind(uuid, gameName, statName, value).run();
  return new Response('Statistic updated', { status: 200 });
}

async function getPlayerGameStats(uuid: string, gameName: string, env: Env): Promise<Response> {
  const query = `
    SELECT stat_name, value FROM player_statistics
    WHERE uuid = ? AND game_name = ?`;
  const result = await env.DB.prepare(query).bind(uuid, gameName).all();
  if (result.results.length > 0) {
    return new Response(JSON.stringify(result.results), { status: 200 });
  }
  return new Response('Game stats not found', { status: 404 });
}

async function deletePlayerStatistic(uuid: string, gameName: string, statName: string, env: Env): Promise<Response> {
  const query = `
    DELETE FROM player_statistics
    WHERE uuid = ? AND game_name = ? AND stat_name = ?`;
  await env.DB.prepare(query).bind(uuid, gameName, statName).run();
  return new Response('Statistic deleted', { status: 200 });
}
