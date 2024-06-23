import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.kelpie.upsert({
        where: { name: 'Tigre' },
        update: {},
        create: {
            name: 'Tigre',
            description: 'It takes the form of a horse to better attract its prey.',
            lastSee: ' Manuel Vega',
            countlastSee: 12,
            extinct: false,
        },
    });
    const post2 = await prisma.kelpie.upsert({
        where: { name: 'Kelpie' },
        update: {},
        create: {
            name: 'Kelpie',
            description: 'A water spirit capable of changing shape, which inhabits the lakes and ponds of Scotland. In his appearances he was usually described with the fo',
            lastSee: 'Gran Colombia',
            countlastSee: 12,
            extinct: false,
        },
    });

    console.log({ post1, post2 }); 
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });