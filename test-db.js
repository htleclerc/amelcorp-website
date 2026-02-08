const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Attempting to connect to database...');
        const count = await prisma.booking.count();
        console.log('Connection successful. Booking count:', count);
    } catch (e) {
        console.error('Database connection failed:');
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
