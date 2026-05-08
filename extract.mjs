import fs from 'fs';

const html = fs.readFileSync('raw-html.txt', 'utf8');

// Simple extraction using Regex since we don't have cheerio easily available.
const cards = html.split('<div class="template-card__media-shell">').slice(1);
const results = [];

for (const card of cards) {
    if (results.length >= 16) break;

    // extract title
    const titleMatch = card.match(/<h3 class="template-card__title">\s*<a[^>]*>(.*?)<\/a>\s*<\/h3>/);
    const title = titleMatch ? titleMatch[1].trim() : "Unknown title";
    
    // generate slug
    // extract slug from the a href like <a href="https://123website.com.vn/san-pham/mau-website-ban-hang/mau-website-ban-hang-cong-nghe-radios-home-2/" class="template-card__media" data-pan-media="">
    const linkMatch = card.match(/<a href="([^"]+)" class="template-card__media"/);
    const linkUrl = linkMatch ? linkMatch[1] : '';
    let slug = '';
    if (linkUrl) {
        const parts = linkUrl.split('/').filter(p => p);
        slug = parts[parts.length - 1]; // e.g. mau-website-ban-hang-cong-nghe-radios-home-2
    } else {
        slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    // extract image inside noscript or data-lazy-src
    const imgMatch = card.match(/<noscript><img[^>]*src="([^"]+)"/);
    const imgUrl = imgMatch ? imgMatch[1] : '';

    // extract demoUrl
    const demoMatch = card.match(/<a href="([^"]+)"[^>]*class="template-card__action template-card__action--external"/);
    const demoUrl = demoMatch ? demoMatch[1] : '';

    // extract category
    const catMatch = card.match(/<span class="template-card__badge">([^<]+)<\/span>/);
    const category = catMatch ? catMatch[1].trim() : 'Mẫu giao diện';

    results.push({
        slug,
        title,
        category,
        image: imgUrl,
        demoUrl
    });
}

fs.writeFileSync('extracted-16.json', JSON.stringify(results, null, 2));
console.log('Extracted ' + results.length + ' items');
