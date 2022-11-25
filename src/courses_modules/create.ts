import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "2d6183bf-642f-42a7-9b40-8f3a55f4fa2a",
            fk_id_modules: "2d2339b7-989e-4e95-90fd-cbc7c0919e0c"
        }
    })

    console.log(result);
}

main()
