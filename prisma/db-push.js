const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Manually load .env file if it exists
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            const key = match[1];
            let value = match[2] || '';
            // Remove surrounding quotes if they exist
            value = value.replace(/^(['"])(.*)\1$/, '$2');
            process.env[key] = value;
        }
    });
}

const skipDbPush = (process.env.SKIP_DB_PUSH || '').trim() === 'true';

if (skipDbPush) {
    console.log('Skipping Prisma DB push (SKIP_DB_PUSH is true).');
} else {
    console.log('Running Prisma DB push...');
    try {
        execSync('npx prisma db push --accept-data-loss', { stdio: 'inherit' });
        console.log('Prisma DB push completed successfully.');
    } catch (error) {
        console.error('Error during Prisma DB push:', error.message);
        process.exit(1);
    }
}
