import { LogtoNextConfig } from "@logto/next";

export const logtoConfig = {
    endpoint: process.env.LOGTO_ENDPOINT || 'https://logto.example.com',
    appId: process.env.LOGTO_APP_ID || 'your-app-id',
    appSecret: process.env.LOGTO_APP_SECRET || 'your-app-secret',
    baseUrl: `${process.env.BASE_URL}/api/logto` || 'https://your-app.example.com/api/logto',
    cookieSecret: process.env.COOKIE_SECRET,
    cookieSecure: process.env.NODE_ENV === 'production',
} as LogtoNextConfig;