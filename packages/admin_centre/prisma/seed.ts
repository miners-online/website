import { PrismaClient } from "@prisma/client";

async function seed() {
  const prisma = new PrismaClient();

  try {
    let client = await prisma.api_client.create({
      data: {
        name: "Miners Online"
      },
    });
    
    let token = await prisma.api_token.create({
      data: {
        value: process.env.API_TOKEN,
        clientId: client.id
      },
    });

    await prisma.game.create({
      data: {
        name: "test",
      }
    });

    await prisma.token_permission.create({
      data: {
        value: "statistics.test.read",
        tokenId: token.id
      }
    })

    await prisma.token_permission.create({
      data: {
        value: "statistics.test.write",
        tokenId: token.id
      }
    })

    console.log("Seed data has been inserted successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();