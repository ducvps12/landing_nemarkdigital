const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        let errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        page.on('pageerror', err => {
            errors.push(err.toString());
        });

        await page.goto('http://localhost:4001/en', { waitUntil: 'networkidle2' });
        
        // Wait a few seconds to let hydration happen and errors log
        await new Promise(r => setTimeout(r, 2000));
        
        console.log("--- BROWSER CONSOLE ERRORS ---");
        if (errors.length === 0) {
            console.log("No errors found!");
        } else {
            errors.forEach((err, i) => console.log(`[${i}]: ${err}`));
        }
        console.log("------------------------------");
        
        await browser.close();
    } catch (e) {
        console.error("Puppeteer Script Error:", e.message);
    }
})();
