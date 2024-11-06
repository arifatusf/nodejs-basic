const fs = require('fs'); // Import module fs

const path = require('path'); // Import module path

// Menetapkan path lengkap untuk file notes.txt
const filePath = path.resolve(__dirname, 'notes.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data); // Menampilkan isi file ke console
});
