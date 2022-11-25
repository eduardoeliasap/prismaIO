import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Elixir",
            description: "Curso de React Elixir",
            duration: 300,
            teacher: {
                create: {
                    name: "André Mattos"
                }
            }
        }
    })

    console.log(result);
}

main()