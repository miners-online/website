import { IMinecraftData, pingUriResult } from "minecraft-server-ping";

export type MinecraftServerStatus = {
    online: boolean;
    version: string;
    players: number;
    maxPlayers: number;
    description: string;
};

export async function GET(): Promise<Response> {
    const serverStatus: MinecraftServerStatus = {
        online: false,
        version: '',
        players: 0,
        maxPlayers: 0,
        description: '',
    };

    const result = await pingUriResult('minecraft://minersonline.uk:25565');

    if (result.isOk) {
        const data: IMinecraftData = result.ok();
        serverStatus.online = true;
        serverStatus.version = data.version.name;
        serverStatus.players = data.players.online;
        serverStatus.maxPlayers = data.players.max;
        serverStatus.description = data.description.text;
    } else {
        console.log(result.err().message); // Error message
    }

    return new Response(JSON.stringify(serverStatus), {
        headers: {
        "Content-Type": "application/json",
        },
    });
}
