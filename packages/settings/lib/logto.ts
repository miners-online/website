import 'dotenv/config'

import { LogtoNextConfig, UserScope } from "@logto/next";
import { CreateManagementApiOptions } from "@logto/api/management";

export const logtoConfig = {
  endpoint: process.env.LOGTO_ENDPOINT,
  appId: process.env.LOGTO_APP_ID,
  appSecret: process.env.LOGTO_APP_SECRET,
  baseUrl: process.env.BASE_URL,
  cookieSecret: process.env.COOKIE_SECRET,
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

export const logtoM2MConfig = {
  clientId: process.env.LOGTO_M2M_CLIENT_ID,
  clientSecret: process.env.LOGTO_M2M_CLIENT_SECRET
} as CreateManagementApiOptions 