import fs from 'fs';
import https from 'https';

https.get('https://123website.com.vn/giao-dien-web-mau/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    // try to match <article ...> to get template info
    // Looking at common WordPress structures
    // we might need a quick hack to extract things.
    fs.writeFileSync('raw-html.txt', data);
    console.log('Saved to raw-html.txt');
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
