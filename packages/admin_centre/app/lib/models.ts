import { PrismaClient, api_token } from "@prisma/client";

export interface SecureAPIToken {
  id: string
  clientId: string
  createdAt: Date
  updatedAt: Date
}

export const getAPITokensSecure = async () => {
  const prisma = new PrismaClient();
  let db_results = await prisma.api_token.findMany();
  let results: SecureAPIToken[] = []
  db_results.map((token: api_token) => {
    let newToken: SecureAPIToken = {
      id: token.id,
      clientId: token.clientId,
      createdAt: token.createdAt,
      updatedAt: token.updatedAt
    }
    results.push(newToken);
  })
};