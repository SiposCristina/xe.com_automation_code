import {test, expect} from "@playwright/test"


test ("test", async ({page})=>{

      await page.goto("https://www.xe.com/")
      await page.getByRole('button', { name: 'Accept' }).click();
      await page.click("id=amount")
      await page.locator("id=amount").fill("500")
      const currencies = ["USD", "EUR", "JPY", "CAD", "AUD", "GBP", "RON","CHF", "THB", "AED"];
            
      for (let i=0; i<currencies.length; i++) 
      {
            let currentCurrency = currencies[i];

            console.log(currentCurrency); 
   
            await page.locator('#midmarketFromCurrency').getByPlaceholder('Type to search...').type(currentCurrency);
            await page.locator('#midmarketFromCurrency').getByPlaceholder('Type to search...').press('Enter');
            await page.locator('#midmarketToCurrency').getByPlaceholder('Type to search...').type(currentCurrency);
            await page.locator('#midmarketToCurrency').getByPlaceholder('Type to search...').press('Enter');
  
            if (i==0) 
            {
            await page.getByRole('button', { name: 'Convert', exact: true }).click();
            }
      }
      
      
      await page.getByRole('link', { name: 'Charts', exact: true }).click();
      await page.getByRole('button', { name: 'View chart' }).click();

      const curren = ["HUF", "EUR", "INR", "CAD", "AUD", "GBP", "TRY","CHF", "THB", "AED"];
            
      for (let i=0; i<curren.length; i++) 
      {
            let currenCurrency = curren[i];

            console.log(currenCurrency); 

            await page.locator('#midmarketFromCurrency').getByPlaceholder('Type to search...').type(currenCurrency);
            await page.locator('#midmarketFromCurrency').getByPlaceholder('Type to search...').press('Enter');
            await page.locator('#midmarketToCurrency').getByPlaceholder('Type to search...').type(currenCurrency);
            await page.locator('#midmarketToCurrency').getByPlaceholder('Type to search...').press('Enter');
      }
})
