import https from 'https';
https.get('https://html.duckduckgo.com/html/?q=raj+shamani+linkedin+profile', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const urls = data.match(/https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png)/gi) || [];
    console.log([...new Set(urls)].join('\n'));
  });
});
