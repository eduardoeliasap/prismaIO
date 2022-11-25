import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "História da linguagem C",
            description: "História da linguagem C",
            CoursesModules: {
                create: {
                    courses: {
                        connect: {
                            id: "2d6183bf-642f-42a7-9b40-8f3a55f4fa2a"
                        }
                    }
                }
            }
        }
    })

    console.log(result);
}

main()