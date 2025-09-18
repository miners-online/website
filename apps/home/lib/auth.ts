import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [{
        id: "miners-online", // signIn("my-provider") and will be part of the callback URL
        name: "Miners Online", // optional, used on the default login page as the button text.
        type: "oidc", // or "oauth" for OAuth 2 providers
        issuer: process.env.AUTH_ISSUER, // to infer the .well-known/openid-configuration URL
        clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
        clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
    }],
})