import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "88f68c9e-2ed7-482f-b99e-49b1d5597535"
        },
        include: {
            CoursesModules: true
        }
    })

    console.log(JSON.stringify(result));
}

main()