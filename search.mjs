import https from 'https';
https.get('https://www.forbesindia.com/article/30-under-30-2023/raj-shamani-telling-stories-for-brands-one-reel-at-a-time/82927/1', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const urls = data.match(/https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png)/gi) || [];
    console.log([...new Set(urls)].join('\n'));
  });
});
