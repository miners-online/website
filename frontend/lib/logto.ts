import { LogtoContext, LogtoNextConfig, UserScope } from "@logto/next";

export const logtoConfig = {
    endpoint: process.env.LOGTO_ENDPOINT || 'https://logto.example.com',
    appId: process.env.LOGTO_APP_ID || 'your-app-id',
    appSecret: process.env.LOGTO_APP_SECRET || 'your-app-secret',
    baseUrl: `${process.env.BASE_URL}/api/logto` || 'https://your-app.example.com/api/logto',
    cookieSecret: process.env.COOKIE_SECRET,
    cookieSecure: process.env.NODE_ENV === 'production',
    scopes: [
        UserScope.CustomData,
        UserScope.Email,
        UserScope.Identities,
        UserScope.OrganizationRoles,
        UserScope.Organizations,
        UserScope.Phone,
        UserScope.Profile,
        UserScope.Roles
    ],
} as LogtoNextConfig;

export interface User {
    id: string;
    email?: string;
    name?: string;
    picture?: string;
    initials?: string;
}

export function getUser(config: LogtoContext) {
    if (!config.isAuthenticated) {
        return undefined;
    }

    if (config.claims == undefined) {
        return undefined;
    }

    // Generate initials from the user's name, we need to split the name and take the first letter of each part
    const initials = config.claims.name
        ? config.claims.name
            .split(' ')
            .map(part => part.charAt(0).toUpperCase())
            .join('')
        : '';

    const user = {
        id: config.claims.sub,
        email: config.claims.email,
        name: config.claims.name,
        picture: config.claims.picture,
        initials: initials,
    } as User;

    return user;
}