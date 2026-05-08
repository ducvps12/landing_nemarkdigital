import fs from 'fs';
const file = 'app/[locale]/mau-website/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The issue: I wrote `\` followed by `` ` `` and `\$`.
content = content.replace(/\\`/g, '`');
content = content.replace(/\\\$/g, '$');

fs.writeFileSync(file, content);
console.log('Fixed JSX escapes');
