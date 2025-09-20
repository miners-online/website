import { LogtoNextConfig, UserScope } from "@logto/next";

export const logtoConfig = {
  endpoint: process.env.AUTH_ISSUER!,
  appId: process.env.AUTH_CLIENT_ID!,
  appSecret: process.env.AUTH_CLIENT_SECRET!,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  cookieSecret: process.env.COOKIE_SECRET!,
  cookieSecure: process.env.NODE_ENV === 'production',
  scopes: [
    UserScope.Address,
    UserScope.CustomData,
    UserScope.Email,
    UserScope.Identities,
    UserScope.OrganizationRoles,
    UserScope.Organizations,
    UserScope.Phone,
    UserScope.Profile,
    UserScope.Roles
  ]
} as LogtoNextConfig;