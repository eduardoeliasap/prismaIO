import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React",
            duration: 500,
            description: "Curso de React",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Mellina da Silva Simões"
                    },
                    create: {
                        name: "Mellina da Silva Simões"
                    }
                },
            }
        }
    })

    console.log(result);
}

main()
