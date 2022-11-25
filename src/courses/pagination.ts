import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

let exist = true;
let skpi = 0;

async function main() {
    while (exist) {
        const result = await prisma.courses.findMany({
            skip: skpi,
            take: 1,
        });

        skpi += 1;
        console.log(result);
        console.log("----------");

        if (result.length <= 0)
            exist = false;
    }
}

main()