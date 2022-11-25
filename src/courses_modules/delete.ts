import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.coursesModules.delete({
        where: {
            id: "4f51d6ae-a1a4-4d4e-b1b1-c02b375ef0c6"
        }
    })
}

main()