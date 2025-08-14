interface BaseServerStatus {
    online: boolean;
    ip: string;
    port: number;
    hostname?: string;
    debug: DebugInfo;
}

interface DebugInfo {
    ping: boolean;
    query: boolean;
    bedrock: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
}

interface OnlineServerStatus extends BaseServerStatus {
    online: true;
    version: string;
    protocol?: {
        version: number;
        name?: string;
    };
    icon?: string;
    software?: string;
    map: {
        raw: string;
        clean: string;
        html: string;
    };
    gamemode?: string; // Bedrock only
    serverid?: string; // Bedrock only
    eula_blocked?: boolean; // Java only
    motd: {
        raw: string[];
        clean: string[];
        html: string[];
    };
    players: {
        online: number;
        max: number;
        list?: Array<{
            name: string;
            uuid: string;
        }>;
    };
    plugins?: Array<{
        name: string;
        version: string;
    }>;
    mods?: Array<{
        name: string;
        version: string;
    }>;
    info?: {
        raw: string[];
        clean: string[];
        html: string[];
    };
}

interface OfflineServerStatus extends BaseServerStatus {
    online: false;
}

export type ServerStatus = OnlineServerStatus | OfflineServerStatus;