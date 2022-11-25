import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Java",
            description: "Curso de React Java",
            duration: 300,
            fk_id_teacher: "ee23935b-1141-48b5-9f89-bb3a22564e97"
        }
    })

    console.log(result);
}

main()