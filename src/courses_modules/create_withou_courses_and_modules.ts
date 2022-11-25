import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            courses: {
                create: {
                    name: "Programação de computadores",
                    duration: 300,
                    description: "Programação de computadores",
                    fk_id_teacher: "82229496-46eb-4c0f-9c46-0d88adfb5298"
                }
            },
            modules: {
                create: {
                    name: "História dos computadores",
                    description: "História dos computadores",
                }
            }
        }
    })

    console.log(result);
}

main()