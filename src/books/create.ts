import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: "Linguagem C para iniciantes",
            author_id: "1e9347b4-6efe-4163-8347-807a38f50818"
        }
    })

    console.log(result);
}

main()