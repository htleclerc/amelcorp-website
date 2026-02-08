try {
    console.log('Attempting to import lib/mail.js...');
    const mail = require('./lib/mail.js');
    console.log('Import successful.');
} catch (e) {
    console.error('Import failed:');
    console.error(e);
}
