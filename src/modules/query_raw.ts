import { PrismaClient, Prisma, Modules } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<Modules[]>(
        Prisma.sql`Select * From modules`
    )

    result.map((item) => console.log(item));
    result.map((item) => console.log(item.name));
}

main()