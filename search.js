const http = require('https');

http.get('https://html.duckduckgo.com/html/?q=raj+shamani+images', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const urls = data.match(/https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png)/gi) || [];
    console.log(urls.slice(0, 15).join('\n'));
  });
});
