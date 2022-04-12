const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			factoftheday: {},
			exercises: [],
			quotes: [],
			nutrition: [
				{
					id: 0,
					url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hc3xlbnwwfHwwfHw%3D&w=1000&q=80",
					name: "Bananas",
					sample: "Did You Know Bananas are Considered a 'SuperFood'?... Read More Here!",
					body: "There's a bit of confusion surrounding bananas. Some people consider this iconic golden fruit a healthy choice while others avoid it, after seeing it on Internet lists of “5 Worst Foods.” Unfavorable claims suggest that bananas cause weight gain and constipation. An article from 1917 published in the Journal of the American Medical Association defended the nutritional value of bananas, citing rumored beliefs during that time: 'The banana is a cause of indigestion and a treacherous dietary component'. The scientific name for banana is Musa, from the Musaceae family of flowering tropical plants, which distinctively showcases the banana fruit clustered at the top of the plant. The mild-tasting and disease-resistant Cavendish type is the main variety sold in the U.S. and Europe. Despite some negative attention, bananas are nutritious and may even carry the title of the first “superfood,” endorsed by the American Medical Association in the early 20th century as a health food for children and a treatment for celiac disease. Bananas are a good source of Vitamin B6, Fiber, Potassium, Magnesium, Vitamin C, Manganese. Different types of bananas are Yellow Banana (Cavendish), Plantain (Green Banana), Red Banana, Lady Finger."
				},
				{
					id: 1,
					url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIApiQt7KZWiv_BpzEGlVINxkbB221li3Yg&usqp=CAU",
					name: "Fish",
					sample: "Did You Know Fish is Jammed Pack With Nutrients We Need Every Day?... Read More Here!",
					body: "Fish is packed with many nutrients that most people are lacking. This includes high-quality protein, iodine, and various vitamins and minerals. Fatty species are sometimes considered the healthiest. That's because fatty fish, including salmon, trout, sardines, tuna, and mackerel, are higher in fat-based nutrients. This includes vitamin D, a fat-soluble nutrient that many people are lacking. Fatty fish also boast omega-3 fatty acids, which are crucial for optimal body and brain function and strongly linked to a reduced risk of many diseases. To meet your omega-3 requirements, eating fatty fish at least once or twice a week is recommended. If you are a vegan, opt for omega-3 supplements made from microalgae. Also, Unsurprisingly, many large observational studies show that people who eat fish regularly have a lower risk of heart attacks, strokes, and death from heart disease. In one study in more than 40,000 men in the United States, those who regularly ate one or more servings of fish per week had a 15% lower risk of heart disease. Researchers believe that fatty types of fish are even more beneficial for heart health due to their high omega-3 fatty acid content."
				},
				{
					id: 2,
					url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/maca-root-powder.jpg?quality=82&strip=1",
					name: "Maca Root",
					sample: "Did You Know Maca Root Can Increase Your Libido?... Read More Here!",
					body: "Some evidence suggests that taking concentrated maca supplements may benefit those with low libido, or low sexual desire. A 2015 study in 45 women who were experiencing antidepressant-induced sexual dysfunction found that taking 3,000 mg of maca root per day for 12 weeks significantly improved sexual function and libido compared with a placebo. A 2010 review that included four high quality studies with a total of 131 participants found evidence that taking maca improved sexual desire after at least 6 weeks. However, the researchers noted that the studies included in the review were small and that evidence was too limited to draw firm conclusions. Even though this research is promising, it's currently unclear whether maca has any real benefit for treating low libido or sexual dysfunction. Also, Taking maca supplements may help improve certain aspects of fertility in people with sperm. For example, studies have shown that taking maca may help improve sperm concentration, or the number of sperm per milliliter of semen. Sperm concentration is closely linked to male fertility. A 2020 study assessed the effects of maca in 69 men diagnosed with mild low sperm count or reduced sperm motility. Sperm motility is the ability of sperm to swim properly Taking 2 grams of maca per day for 12 weeks significantly improved semen concentration compared with a placebo treatment. However, there was no significant difference in sperm motility between the treatment and placebo groups. While these results are promising, research is limited at this time. Well-designed studies are needed to investigate the effects of maca supplements on semen quality and other aspects of male fertility."
				},
				{
					id: 3,
					url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528",
					name: "Honey",
					sample: "Did You Know Honey is Rich in Antioxidants?... Read More Here!",
					body: "Honey is essentially pure sugar, with no fat and only trace amounts of protein and fiber. It contains small amounts of some nutrients, but most people typically don’t consume enough honey for it to be a significant dietary source of vitamins and minerals. Still, it's worth noting that honey is rich in health-promoting plant compounds known as polyphenols.Also, High quality honey — which is minimally processed, unheated, and fresh — contains many important bioactive plant compounds and antioxidants, such as flavonoids and phenolic acids. Darker varieties tend to offer more antioxidants than lighter varieties. Antioxidants help neutralize reactive oxygen species in your body, which can build up in cells and cause damage. This damage can contribute to conditions like premature aging, type 2 diabetes, and heart disease. As such, many of honey’s health benefits are attributed to its antioxidant content."
				},
				{
					id: 4,
					url: "https://thekitchencommunity.org/wp-content/uploads/2021/06/How-long-does-garlic-last-1200x675.jpg",
					name: "Garlic",
					sample: "Did You Know Garlic Can Lower Your Cholesterol?... Read More Here!",
					body: "The potential therapeutic benefits of garlic primarily come from its bioactive compounds, including organic sulfides, saponins, phenolic compounds, and polysaccharides. Keep in mind that many studies on the health benefits of garlic involve garlic supplements and not the garlic you buy at the store. So you may not gain the health benefits of garlic simply by using it in your cooking unless you consume amounts that are equivalent to amounts found in supplements. Studies have shown garlic to produce potent anti-inflammatory effects by decreasing biomarkers of inflammation. A double-blind randomized clinical trial showed a significant reduction of inflammatory cytokines with a 400 mg dose of garlic extract given twice a day for eight weeks. Keep in mind this study used an extract and may not reflect real-life consumption of garlic. Also, Garlic has been shown to lower serum cholesterol levels. Patients with diabetes who were given a combination of olive oil and garlic were able to regulate cholesterol and triglyceride levels. These effects were seen with garlic in powder or non-powdered form dosed over one to three months. After four months, the garlic consumption raised HDL (good cholesterol) and lowered LDL (bad cholesterol) and total cholesterol levels."
				},
			],
			facts: [],
			appointments: [
				{
					text: "Website Re-Design Plan",
					startDate: new Date("2021-04-26T16:30:00.000Z"),
					endDate: new Date("2021-04-26T18:30:00.000Z"),
				},
				{
					text: "Book Flights to San Fran for Sales Trip",
					startDate: new Date("2021-04-26T19:00:00.000Z"),
					endDate: new Date("2021-04-26T20:00:00.000Z"),
					allDay: true,
				},
				{
					text: "Install New Router in Dev Room",
					startDate: new Date("2021-04-26T21:30:00.000Z"),
					endDate: new Date("2021-04-26T22:30:00.000Z"),
				},
				{
					text: "Approve Personal Computer Upgrade Plan",
					startDate: new Date("2021-04-27T17:00:00.000Z"),
					endDate: new Date("2021-04-27T18:00:00.000Z"),
				},
				{
					text: "Final Budget Review",
					startDate: new Date("2021-04-27T19:00:00.000Z"),
					endDate: new Date("2021-04-27T20:35:00.000Z"),
				},
				{
					text: "New Brochures",
					startDate: new Date("2021-04-27T21:30:00.000Z"),
					endDate: new Date("2021-04-27T22:45:00.000Z"),
				},
				{
					text: "Install New Database",
					startDate: new Date("2021-04-28T16:45:00.000Z"),
					endDate: new Date("2021-04-28T18:15:00.000Z"),
				},
				{
					text: "Approve New Online Marketing Strategy",
					startDate: new Date("2021-04-28T19:00:00.000Z"),
					endDate: new Date("2021-04-28T21:00:00.000Z"),
				},
				{
					text: "Upgrade Personal Computers",
					startDate: new Date("2021-04-28T22:15:00.000Z"),
					endDate: new Date("2021-04-28T23:30:00.000Z"),
				},
				{
					text: "Customer Workshop",
					startDate: new Date("2021-04-29T18:00:00.000Z"),
					endDate: new Date("2021-04-29T19:00:00.000Z"),
					allDay: true,
				},
				{
					text: "Prepare 2021 Marketing Plan",
					startDate: new Date("2021-04-29T18:00:00.000Z"),
					endDate: new Date("2021-04-29T20:30:00.000Z"),
				},
				{
					text: "Brochure Design Review",
					startDate: new Date("2021-04-29T21:00:00.000Z"),
					endDate: new Date("2021-04-29T22:30:00.000Z"),
				},
				{
					text: "Create Icons for Website",
					startDate: new Date("2021-04-30T17:00:00.000Z"),
					endDate: new Date("2021-04-30T18:30:00.000Z"),
				},
				{
					text: "Upgrade Server Hardware",
					startDate: new Date("2021-04-30T21:30:00.000Z"),
					endDate: new Date("2021-04-30T23:00:00.000Z"),
				},
				{
					text: "Submit New Website Design",
					startDate: new Date("2021-04-30T23:30:00.000Z"),
					endDate: new Date("2021-05-01T01:00:00.000Z"),
				},
				{
					text: "Launch New Website",
					startDate: new Date("2021-04-30T19:20:00.000Z"),
					endDate: new Date("2021-04-30T21:00:00.000Z"),
				},
			],
		},
		actions: {
			getMessage: () => {
				fetch("https://type.fit/api/quotes")
					.then((resp) => resp.json())
					.then((data) => setStore({ quotes: data }))
					.catch((error) =>
						console.log("Error loading message from backend", error)
					);
			},
			getExercise: () => {
				const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
						'X-RapidAPI-Key': 'a39bba7990msha4ac715b9b5d9b3p17e0d8jsnb3cbb40d992a'
					}
				};

				fetch('https://exercisedb.p.rapidapi.com/exercises', options)
					.then(response => response.json())
					.then(response => setStore({ exercises: response }))
					.catch(err => console.error(err));
			},
			getFact: () => {
				let fact = getStore().nutrition[Math.floor(Math.random() * 5)]
				setStore({ factoftheday: fact })
			},
			getFav: (favName) => {

				let newFavorites = getStore().favorites;

				let found = newFavorites.find(item => item == favName);

				if (found) {
					newFavorites = newFavorites.filter((item) => item != favName)
				}
				else {
					newFavorites = [...newFavorites, favName]
				}
				setStore({ favorites: newFavorites });
			},
		}
	};
};

export default getState;


// getFact only runs once because it is put inside of the app context useEffect that only runs once when the whole application is loaded. also the item is placed in fact of the day so it only loads that specific object.
