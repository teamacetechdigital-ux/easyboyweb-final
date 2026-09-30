const fs = require('fs');
const sharp = require('sharp');
for (const f of ['appscreen2.svg', 'Creativescreen1.svg', 'Creativescreen2.svg', 'Creativescreen3.svg', 'Creativescreen4.svg']) {
  const s = fs.readFileSync('public/imgs/' + f, 'utf8');
  const match = s.match(/xlink:href="data:image\/([^;]+);base64,([^"]+)/);
  console.log(f, s.slice(0, s.indexOf('<image')));
  if (match) sharp(Buffer.from(match[2], 'base64')).resize({ width: 700 }).png().toFile('gallery-check-' + f + '.png');
}
