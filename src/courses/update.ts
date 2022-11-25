import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "7072e8f7-5b4c-4a9c-a8f6-005cf80efc37"
        },
        data: {
            name: "Curso de Elixir",
            description: "Curso de Elixir"
        }
    })

    console.log(result);
}
main();