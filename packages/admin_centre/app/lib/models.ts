import { PrismaClient, api_token } from "@prisma/client";

const prisma = new PrismaClient();

export interface DisplayableAPIToken {
  id: string
  name: string
  clientId: string
  clientName: string
  createdAt: Date
  updatedAt: Date
}

export const getAPITokensSecure = async () => {
  let db_results = await prisma.api_token.findMany();
  let results: DisplayableAPIToken[] = []

  await Promise.all(db_results.map(async (token: api_token) => {
    let client = await getClient(token.clientId);
    let newToken: DisplayableAPIToken = {
      id: token.id,
      name: token.name,
      clientId: token.clientId,
      clientName: client?.name || token.clientId,
      createdAt: token.createdAt,
      updatedAt: token.updatedAt
    }
    results.push(newToken);
  }));
  return results;
};

export const getClient = async (client_id: string) => {
  let client = await prisma.api_client.findFirst({
    where: {
      id: client_id
    }
  })
  return client;
};

export const getGames = async () => {
  let games = await prisma.game.findMany();
  return games;
};