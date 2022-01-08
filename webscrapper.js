const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await new browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('//*[@id="imgBlkFront"]')
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();


    const [el2] = await page.$x('//*[@id="productTitle"]')
    const txt = await el.getProperty('textContent');
    const title = await src.jsonValue();

    
    const [el3] = await page.$x('//*[@id="aod-price-1"]/span/span[2]')
    const Txt2 = await el.getProperty('textContent');
    const price = await src.jsonValue();
     
    console.log({srcTxt, title, price});

    browser.close();
}

scrapeProduct('https://www.amazon.com/War-Peace-Penguin-Classics-Deluxe/dp/0143039997/ref=sr_1_5?crid=35D26VWA5IRP0&keywords=war+and+peace&qid=1641658008&sprefix=war+and+peac%2Caps%2C481&sr=8-5')