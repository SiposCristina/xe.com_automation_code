const { chromium } = require('playwright');
const fs = require('fs')


const data = fs.readFileSync("currency.json", 'utf8');
const currencies = JSON.parse(data);
console.log(currencies);

(async () => {
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.xe.com/');
    await page.getByRole('button', { name: 'Accept' }).click();

    for (currency in currencies){
    await page.goto("https://www.xe.com/currencyconverter/convert/?Amount=1000&From="+currencies[currency].From+"&To="+currencies[currency].TO);
    
    
    await page.screenshot({ path: `XE-${currencies[currency].From}-${currencies[currency].TO}.png`});
    
    }

    // ---------------------
    await context.close();
    await browser.close();
  })();
