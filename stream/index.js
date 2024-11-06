const fs = require('fs'); // Mengimpor modul fs
const path = require('path'); // Mengimpor modul path

// Menetapkan path untuk input.txt dan output.txt
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// Membuat readable stream untuk membaca dari input.txt
const readableStream = fs.createReadStream(inputPath, 'utf8');

// Membuat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream(outputPath);

// Mengalirkan data dari readable stream ke writable stream
readableStream.pipe(writableStream);

readableStream.on('end', () => {
  console.log('File telah berhasil disalin ke output.txt');
});
