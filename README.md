# xe.com_automation_code
<h3>Product Information</h3><br> <p> XE.com is an online currency converter application. It offers exchange rate information, international money transfers, and other currency-related services via its website, mobile apps, and other online channels.
Xe.com offers various free online currency tools, including the Xe Currency Converter, which allows visitors to check live exchange rates of any world currency. The website also offers free historical charts and rate tables. The company provides a foreign exchange service (Xe Money Transfer) and a commercial currency data feed service (Xe Currency Data) that offers accurate and reliable exchange rates for businesses. </p>

<h3>Description</h3><br>
<p>The script automates the process of navigating to the XE homepage, and then to the corresponding currency conversion page on XE for each currency pair specified in the “currency.json” file. The script reads the “currency.json” file and its contents are parsed from JSON format into a JavaScript object named “currencies”. JSON file contains major, minor, and exotic currency pairs.</p>
<p>The script iterates over each currency in the “currencies” object. For each currency, it navigates to the XE currency converter page with the specified conversion parameters such as the “Amount” (fixed at 1000), “From” (source currency), and “To” (target currency). The URL is dynamically constructed using “From” and “To” values from the “currencies” object.</p>

<p>Next, the script takes screenshots of the conversion results and saves them with filenames indicating the currency pairs.</p>
<p>The automated script, through its captured screenshots, helps the tester verify the conversion results' accuracy and ensure that the correct currency pairs were used.</p>


<h3>Results</h3><br>
<p>The script successfully automates the currency conversion process and captures screenshots of the conversion results. These screenshots are saved in the local directory, with each file named according to the currency pair it represents (e.g., “XE-USD-EUR.png”).</p>
<p>Find below the saved screenshots of the generated results for currency.json file.</p>


![XE-USD-RON](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/31f49877-9c99-4881-ab29-9b597622c7e9)
![XE-USD-RUB](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/631f4dc1-dbc7-4376-ad56-481c303fdb74)
![XE-USD-SEK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/b7906fdf-1d19-41a8-a02f-46d9436eb252)
![XE-USD-SGD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/10bf394a-f424-4a88-a4e2-6031fef5c75d)
![XE-USD-THB](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/b16bb996-e4f1-4f92-b586-533f373e4066)
![XE-USD-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/1235ff6b-42f9-4d23-a954-01dc4d4c6fa9)
![XE-USD-ZAR](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/7374533c-55b0-459f-b9cb-1f4dbc7f8c72)
![XE-AUD-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/92873960-c036-41c2-8209-38da24f7bca8)
![XE-AUD-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/7fb06c8e-eac3-4217-be3e-c74f8a41dea7)
![XE-AUD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/6edc99d5-d905-46b9-984f-71a4f95b4cd5)
![XE-AUD-NZD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/9442739c-d492-4777-97fc-67c15ec0a055)
![XE-AUD-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/8fd7c484-d1d0-4b6e-8aeb-acae4225c58a)
![XE-CAD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/42e7ede3-da1d-439f-ac9e-30c0912ba57a)
![XE-CAD-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/06001098-1d01-4b33-beaa-c84edda2571c)
![XE-CHF-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/ce9f0790-de69-421c-9ed7-827a53dba451)
![XE-EUR-AUD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/5d7bc2d7-982a-4990-acb5-70c1ccad707e)
![XE-EUR-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/bd1e8670-25dc-4cbe-a720-bd75067349e7)
![XE-EUR-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/85c5248c-b154-4995-a36a-5b2b679d9c4b)
![XE-EUR-CZK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/9c105ccb-94d1-4425-9618-b17cd5c1f60f)
![XE-EUR-GBP](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/325e3993-9742-4be1-9e36-5a3636cfbca7)
![XE-EUR-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/ff22834a-9eb3-4eea-94bb-00c021e7b41e)
![XE-EUR-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/f01782d5-b8a5-4f42-83f1-a43bbb8abd5a)
![XE-EUR-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/ac9476b4-0c16-482c-bb18-71f409cee6aa)
![XE-EUR-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/74ddae7c-68c0-4a30-a1bf-8c47b734114d)
![XE-EUR-RON](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/252693e0-c9aa-4375-b082-fee329c752a8)
![XE-EUR-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/30777fbe-7ac6-484c-9dc9-efc82966a415)
![XE-EUR-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/abf6ef63-e4eb-481b-ad9d-0edcd1573f0f)
![XE-GBP-AUD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/179cebc4-3826-4443-96b2-a214df0a152d)
![XE-GBP-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/a086a6b0-ef3a-43e7-adba-eff9e02a03ce)
![XE-GBP-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/f7c27667-4fdd-4378-989d-407b580c2617)
![XE-GBP-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/dffd31c2-7cae-4f9c-a072-e43c3e5ac224)
![XE-GBP-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/db8d886c-9d79-4ebc-8032-63273790a920)
![XE-GBP-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/4c6a80b4-c452-4e7b-8e0e-fd5f5f59be4a)
![XE-GBP-SEK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/88dfbc59-84c8-4dd8-af9e-2466b7d057f1)
![XE-GBP-SGD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/0e6c638f-e280-4e46-b5e8-1b1375510ece)
![XE-GBP-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/297c77de-3234-4e4f-bbcf-8eb5fff811e0)
![XE-GBP-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/c91ed8fe-bb83-4417-a5e0-4cb239e3f73d)
![XE-JPY-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/52e2348b-b99e-4f1f-b06b-493ec3d0ec8f)
![XE-NZD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/30eb15f0-2d8c-4e2c-9faf-a6332564eeed)
![XE-USD-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/2dab0696-1988-4eb4-8183-408810e904d5)
![XE-USD-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/6da83e7c-dfd9-40ff-8997-95741953fa1a)
![XE-USD-CNY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/ab130f8b-24c0-472d-a5f1-f1ceaa1a3873)
![XE-USD-CZK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/68312d94-3015-4dd3-8c00-52a80cc8aa44)
![XE-USD-EUR](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/19b07a08-ad8a-47ab-a070-814bf0315778)
![XE-USD-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/46be6e02-e327-4b33-95c4-fb11c8f28f23)
![XE-USD-ILS](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/9658db80-1b12-4aa2-ada0-8c82a3022066)
![XE-USD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/4723827b-5a8b-4512-908b-2b78786c2663)
![XE-USD-MXN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/d75d4565-6c23-49dc-8576-bd9abcd9cde7)
![XE-USD-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/f1204cd3-02b2-40bb-b5ae-cd67051f669b)
![XE-USD-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/7ac2d0be-1fec-480a-93e9-aff2fa46dc0b)
