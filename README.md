# xe.com_automation_code
<h3>Product Information</h3><br> <p> XE.com is an online currency converter application. It offers exchange rate information, international money transfers, and other currency-related services via its website, mobile apps, and other online channels.
Xe.com offers various free online currency tools, including the Xe Currency Converter, which allows visitors to check live exchange rates of any world currency. The website also offers free historical charts and rate tables. The company provides a foreign exchange service (Xe Money Transfer) and a commercial currency data feed service (Xe Currency Data) that offers accurate and reliable exchange rates for businesses. </p>

<h3>Description</h3><br>
<p>The script automates the process of navigating to the XE homepage, and then to the corresponding currency conversion page on XE for each currency pair specified in the “currency.json” file. The script reads the “currency.json” file and its contents are parsed from JSON format into a JavaScript object named “currencies”. JSON file contains major, minor, and exotic currency pairs.</p>
<p>The script iterates over each currency in the “currencies” object. For each currency, it navigates to the XE currency converter page with the specified conversion parameters such as the “Amount” (fixed at 1000), “From” (source currency), and “To” (target currency). The URL is dynamically constructed using “From” and “To” values from the “currencies” object.</p>

<p>Next, the script takes screenshots of the conversion results and saves them to a file with the name that indicates the source and the target currencies (“XE-USD-EUR.png”).</p>
<p>The automated script, through its captured screenshots, helps the tester verify the conversion results' accuracy and ensure that the correct currency pairs were used.</p>


<h3>Results</h3><br>
<p>The script successfully automates the currency conversion process and captures screenshots of the conversion results. These screenshots are saved in the local directory, with each file named according to the currency pair it represents (e.g., “XE-USD-EUR.png”).</p>
<p>The automated script, through its captured screenshots, helps the tester verify the conversion results' accuracy and ensure that the correct currency pairs were used.</p>
<p>Find below the saved screenshots of the generated results for currency.json file.</p>



