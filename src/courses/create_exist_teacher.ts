import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            description: "Curso de React Native",
            duration: 300,
            teacher: {
                connect: {
                    id: "4aad275c-e3a0-4ed7-b68d-afc97eef22c5"
                }
            }
        }
    })

    console.log(result);
}

main()