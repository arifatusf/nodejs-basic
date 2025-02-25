const fs = require('fs');
const path = require('path'); // Import module path

// Menetapkan path lengkap untuk file notes.txt
const filePath = path.resolve(__dirname, 'article.txt')

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});