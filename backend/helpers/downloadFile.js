const https = require('https');
const fs = require('fs');
const path = require('path');
const base_media = 'https://storage.googleapis.com/mm-online-bucket/ecommerce-website/uploads/media/';

const fileName = '155957.jpg';
const url = base_media + fileName 
const savePath = path.join(__dirname, fileName); // Change the filename and path as needed

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to get image. Status code: ${response.statusCode}`);
    return;
  }

  const fileStream = fs.createWriteStream(savePath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Image downloaded and saved successfully!');
  });
  
  fileStream.on('error', (err) => {
    fs.unlink(savePath, () => {}); // Delete the file async. (But we don't check the result)
    console.error(`Failed to write image to file. Error: ${err.message}`);
  });
}).on('error', (err) => {
  console.error(`Failed to download image. Error: ${err.message}`);
});
