const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=raj+shamani', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const images = data.match(/<img[^>]+src="([^">]+)"/g);
    console.log(images);
  });
});
