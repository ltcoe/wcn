const fs = require('fs');

// Specify the file path
const filePath = 'example.txt';

// Use the fs.readFile method for asynchronous file reading
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
