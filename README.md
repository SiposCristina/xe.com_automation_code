# xe.com_automation_code
<h3>Product Information</h3><br> <p> XE.com is an online currency converter application. It offers exchange rate information, international money transfers, and other currency-related services via its website, mobile apps, and other online channels.
XE.com offers various free online currency tools, including the XE Currency Converter, which allows visitors to check live exchange rates of any world currency. The website also offers free historical charts and rate tables. The company provides a foreign exchange service (XE Money Transfer) and a commercial currency data feed service (XE Currency Data) that offers accurate and reliable exchange rates for businesses. </p>

<h3>Description</h3><br>
<p>The script automates the process of navigating to the XE homepage, and then to the corresponding currency conversion page on XE for each currency pair specified in the CURRENCY.JSON file. The script reads the CURRENCY.JSON file and its contents are parsed from JSON format into a JavaScript object named “currencies”. JSON file contains major, minor, and exotic currency pairs.</p>
<p>The script iterates over each currency in the “currencies” object. For each currency, it navigates to the XE currency converter page with the specified conversion parameters such as the “Amount” (fixed at 1000), “From” (source currency), and “To” (target currency). The URL is dynamically constructed using “From” and “To” values from the “currencies” object.</p>

<p>Next, the script takes screenshots of the conversion results and saves them to a file with the name that indicates the source and the target currencies (“XE-USD-EUR.png”).</p>
<p>The automated script, through its captured screenshots, helps the tester verify the conversion results' accuracy and ensure that the correct currency pairs were used.</p>


<h3>Results</h3><br>
<p>The script successfully automates the currency conversion process and captures screenshots of the conversion results. These screenshots are saved in the local directory, with each file named according to the currency pair it represents (e.g., “XE-USD-EUR.png”).</p>
<p>The automated script, through its captured screenshots, helps the tester verify the conversion results' accuracy and ensure that the correct currency pairs were used.</p>
<p>Find below the saved screenshots of the generated results for currency.json file.</p>

![XE-USD-RON](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/b76294af-d9dc-442e-95a9-2bc979f8a4e9)
![XE-USD-RUB](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/2584aeb6-21fb-47cf-83c8-50f75a4e5c14)
![XE-USD-SEK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/09de813b-24c1-48b3-a92f-df18057503f6)
![XE-USD-SGD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/92a16c85-6691-4e49-95ee-f559a4d65b8c)
![XE-USD-THB](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/10f658b9-c3f5-4888-9032-969feda1718b)
![XE-USD-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/c7dc38b8-144b-4632-830e-5a70f10075ff)
![XE-USD-ZAR](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/6ce5236e-56aa-4b9c-9a1d-997fbc05dee1)
![XE-AUD-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/d298b310-705d-4310-b1c7-97f611cf98c2)
![XE-AUD-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/2ad4b586-cea8-41ba-9ce4-a1a1aa2bb777)
![XE-AUD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/b977ea5d-390d-45f4-a149-70457dc298d3)
![XE-AUD-NZD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/359f7166-ec96-40ee-acf1-d5f4863c87a7)
![XE-AUD-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/ea76961b-6df4-4a43-ba31-3cd52f6281b9)
![XE-CAD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/3c28bd97-39a3-41a8-8cd3-603cdb748ab7)
![XE-CAD-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/4a3d2353-3737-410a-bcf2-e0aa7f670600)
![XE-CHF-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/95fd790a-15a3-4328-a1f0-01a33dcbbf2d)
![XE-EUR-AUD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/e2006807-c3be-466d-9f3c-9b82a41fbc53)
![XE-EUR-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/55ab6a49-9e7c-4cda-ad30-fd0c95ca5eca)
![XE-EUR-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/084ae182-abc5-475b-b072-590223531890)
![XE-EUR-CZK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/3efb5fbb-ff12-4954-9681-c9f81e4c8ca2)
![XE-EUR-GBP](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/59ebfa66-8d0e-40e2-92f0-655bd022f569)
![XE-EUR-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/cf35aa95-66af-4dea-8946-a3cfcb87799b)
![XE-EUR-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/64827e9c-ec27-4212-9a5f-520735798bc0)
![XE-EUR-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/3b149742-6f9f-4f5d-af36-58760af04bf5)
![XE-EUR-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/5bfb7580-a96c-4c24-9363-d205af6efee5)
![XE-EUR-RON](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/a4137ba7-a677-4f4d-b38a-f13d40b3f6f7)
![XE-EUR-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/13f13b9a-b22e-4609-9c01-dcbe63ae966b)
![XE-EUR-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/661a151f-b484-4c4a-b11e-75d862ed9e77)
![XE-GBP-AUD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/507aa39b-abe7-4a90-b401-acf5170b5a31)
![XE-GBP-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/9e787cc4-1d0b-4f98-9571-cf742d43892a)
![XE-GBP-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/a8a8ed27-42f3-4db0-b70b-765b8c1c31cc)
![XE-GBP-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/10b7ecb8-9468-4e3d-8b41-c0c3f9c71033)
![XE-GBP-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/38122ab8-ad35-4ec1-a1a8-85bfd4556992)
![XE-GBP-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/d35f0791-9c67-4dc4-ab13-9deace9387a4)
![XE-GBP-SEK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/83ffd34b-cfc7-4ffd-b1f4-b8ebf990df72)
![XE-GBP-SGD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/04a4ffc8-edf1-4de7-8b28-d6f506fdac9d)
![XE-GBP-TRY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/93990d7c-5450-4b1c-9ca4-ff42fedc29a9)
![XE-GBP-USD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/d46656a5-63e1-468f-b0c9-5056761b22c5)
![XE-JPY-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/a9642b6c-6eeb-4bcb-a69a-91732596f760)
![XE-NZD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/cd44ab4e-b575-485b-8b18-92a435ab7189)
![XE-USD-CAD](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/d5680242-cfab-406a-a4f2-6acba8010a61)
![XE-USD-CHF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/09d1c0dd-28cc-41cb-b6b0-c3bdadc93349)
![XE-USD-CNY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/33b917a2-e6d1-4390-aead-6fdba2afc897)
![XE-USD-CZK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/8829c29b-9a38-45d5-b8dd-519ce8e8fe23)
![XE-USD-EUR](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/f1f6becf-45e2-4b67-a10b-cb2529fcfee8)
![XE-USD-HUF](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/b8cfcff0-0470-4515-86f9-352a930e08db)
![XE-USD-ILS](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/1985406d-bc17-4372-b2f2-3397cdcd26b2)
![XE-USD-JPY](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/7016aa92-a3f6-489d-bd43-c7285838470f)
![XE-USD-MXN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/19800d36-0494-4c23-8233-84e51a9a04c9)
![XE-USD-NOK](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/e64325ff-acd3-4131-bc3a-620e012fd945)
![XE-USD-PLN](https://github.com/SiposCristina/xe.com_automation_code/assets/157922599/bfc01fc1-b0a0-480e-afda-9401dabbdaab)



