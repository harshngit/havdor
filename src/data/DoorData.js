// Sample Door Data
const doors = [
	{
		id: 1,
		doorcode: "HD-JS233,225",
		mainimg: "/asset/door/hav1/pwd1.png",
		img2: "/asset/door/hav1/pwd2.png",
		img3: "/asset/door/hav1/pwd3.png",
		type: "Premium Wooden Door",
		desc: "From quiet coffee talks in the kitchen to late-night reflections by the bedside or moments of focus in the study — your home becomes the backdrop for life’s meaningful pauses. Whether you're easing into the day or winding down from it, these spaces are designed to bring comfort, calm, and effortless elegance to your daily rituals",
		category: "Premium"
	},
	{
		id: 2,
		doorcode: "HD-JS230, 235, HD-PS316",
		mainimg: "/asset/door/hav2/pwd1.png",
		img2: "/asset/door/hav2/pwd2.png",
		img3: "/asset/door/hav2/pwd3.png",
		img4: "/asset/door/hav2/pwd4.png",
		type: "Premium Wooden Door",
		desc: "From quiet coffee talks in the kitchen to late-night reflections by the bedside or moments of focus in the study — your home becomes the backdrop for life’s meaningful pauses. Whether you're easing into the day or winding down from it, these spaces are designed to bring comfort, calm, and effortless elegance to your daily rituals",
		category: "Premium"
	},
	{
		id: 3,
		doorcode: "HD-E55, 19, 80",
		mainimg: "/asset/door/hav3/pwd1.png",
		img2: "/asset/door/hav3/pwd2.png",
		img3: "/asset/door/hav3/pwd3.png",
		type: "Premium Wooden Door",
		desc: "From quiet coffee talks in the kitchen to late-night reflections by the bedside or moments of focus in the study — your home becomes the backdrop for life’s meaningful pauses. Whether you're easing into the day or winding down from it, these spaces are designed to bring comfort, calm, and effortless elegance to your daily rituals",
		category: "Premium"
	},
	{
		id: 4,
		doorcode: "HD-D35",
		mainimg: "/asset/door/hav4/pwd1.png",
		img2: "/asset/door/hav4/pwd2.png",
		img3: "/asset/door/hav4/pwd3.png",
		type: "Aluminium Wooden Door",
		desc: "Aluminium wooden doors bring together strength and style with the perfect touch of wood. Adding the warmth of wood to sleek aluminium, creates a stunning look that suits both modern and classic spaces. These doors are not only beautiful but also built to last, offering excellent insulation with a broken bridge design. A smart blend of elegance, durability, and comfort for any home.",
		category: "Premium"
	},
	{
		id: 5,
		doorcode: "HD-D35",
		mainimg: "/asset/door/hav5/pwd1.png",
		type: "Aluminium Wooden Door",
		desc: "Aluminium wooden doors bring together strength and style with the perfect touch of wood. Adding the warmth of wood to sleek aluminium, creates a stunning look that suits both modern and classic spaces. These doors are not only beautiful but also built to last, offering excellent insulation with a broken bridge design. A smart blend of elegance, durability, and comfort for any home.",
		category: "Premium"
	},
	{
		id: 6,
		doorcode: "Door Code",
		mainimg: "/asset/door/hav6/pwd1.png",
		img2: "/asset/door/hav6/pwd2.png",
		type: "Aluminium Wooden Door",
		desc: "Aluminium wooden doors bring together strength and style with the perfect touch of wood. Adding the warmth of wood to sleek aluminium, creates a stunning look that suits both modern and classic spaces. These doors are not only beautiful but also built to last, offering excellent insulation with a broken bridge design. A smart blend of elegance, durability, and comfort for any home.",
		category: "Premium"
	},
	{
		id: 7,
		doorcode: "HD-D35",
		mainimg: "/asset/door/hav7/pwd1.png",
		img2: "/asset/door/hav7/pwd2.png",
		type: "Aluminium Wooden Door",
		desc: "Aluminium wooden doors bring together strength and style with the perfect touch of wood. Adding the warmth of wood to sleek aluminium, creates a stunning look that suits both modern and classic spaces. These doors are not only beautiful but also built to last, offering excellent insulation with a broken bridge design. A smart blend of elegance, durability, and comfort for any home.",
		category: "Premium"
	},
	{
		id: 8,
		doorcode: "HD-A28B",
		mainimg: "/asset/door/hav8/pwd1.png",
		img2: "/asset/door/hav8/pwd2.png",
		img3: "/asset/door/hav8/pwd3.png",
		type: "Glass Wooden Door",
		desc: "Every space has the potential to shine. Full glass doors welcome more than just light—they welcome warmth, openness, and a modern touch that makes homes, offices, and public spaces feel brighter and more inviting.'Elevate your space. Define it with glass.'",
		category: "Premium"
	},
	{
		id: 9,
		doorcode: "HD-BL01",
		mainimg: "/asset/door/hav9/pwd2.png",
		img2: "/asset/door/hav9/pwd3.png",
		type: "Glass Wooden Door",
		desc: "Every space has the potential to shine. Full glass doors welcome more than just light—they welcome warmth, openness, and a modern touch that makes homes, offices, and public spaces feel brighter and more inviting.'Elevate your space. Define it with glass.'",
		category: "Premium"
	},
	{
		id: 10,
		doorcode: "Invisible door B",
		mainimg: "/asset/door/hav10/pwd1.png",
		type: "Glass Wooden Door",
		desc: "Every space has the potential to shine. Full glass doors welcome more than just light—they welcome warmth, openness, and a modern touch that makes homes, offices, and public spaces feel brighter and more inviting.'Elevate your space. Define it with glass.'",
		category: "Premium"
	},
	{
		id: 11,
		doorcode: "HD-D35B",
		mainimg: "/asset/door/hav11/pwd1.png",
		img2: "/asset/door/hav11/pwd2.png",
		img3: "/asset/door/hav11/pwd3.png",
		type: "Glass Wooden Door",
		desc: "Every space has the potential to shine. Full glass doors welcome more than just light—they welcome warmth, openness, and a modern touch that makes homes, offices, and public spaces feel brighter and more inviting.'Elevate your space. Define it with glass.'",
		category: "Premium"
	},
	{
		id: 12,
		doorcode: " HDM24082",
		mainimg: "/asset/door/hav12/pwd1.png",
		img2: "/asset/door/hav12/pwd2.png",
		type: "Aluminium Door",
		desc: "A GRAND VISION OF ELEGANCE It extracts the texture of impressionistic art from the brilliant and dazzling art world and deconstructs the aesthetics of future comfortable living space, it’s simple and elegant design style achieves the perfect connection between moder architecture and classic art.",
		category: "Mansion"
	},
	{
		id: 13,
		doorcode: "HDM24079",
		mainimg: "/asset/door/hav13/pwd1.png",
		img2: "/asset/door/hav13/pwd2.png",
		type: "Aluminium Door",
		desc: "UNIQUE ARTISTRY The deepest joy lies in companionship, embracing the beauty of a home, and savoring time unhurriedly.The essence of 'Stone' fortune is a profound blessing subtle yet wise reflecting the quiet elegance of time, nature's grace, and the artistry of life. ",
		category: "Mansion"
	},
	{
		id: 14,
		doorcode: "HDM24039,40,41",
		mainimg: "/asset/door/hav14/pwd1.png",
		img2: "/asset/door/hav14/pwd2.png",
		img3: "/asset/door/hav14/pwd3.png",
		type: "Aluminium Door",
		desc: "NOBLE TEMPERAMENT GRACEFUL ELEGANCE With a design that exudes graceful elegance, this door transcends trends, embodying timeless dignity and sophistication.it’s refined craftsmanship and seamless flow create an atmosphere of quiet luxury, unshaken by time, it stands with poise, welcoming light and life into a space where beauty and tranquility coexist effortlessly.",
		category: "Mansion"
	},
	{
		id: 15,
		doorcode: "HDM24019",
		mainimg: "/asset/door/hav15/pwd1.png",
		img2: "/asset/door/hav15/pwd2.png",
		type: "Aluminium Door",
		desc: "SIMPLE LINES. True design lies in simplicity- clean lines that shape elegance, where grandeur emerges effortlessly.Stripping away excess, the door returns to its purest form, transforming the ordinary into something extraordinary.",
		category: "Mansion"
	},
	{
		id: 16,
		doorcode: "HDM24017",
		mainimg: "/asset/door/hav16/pwd1.png",
		img2: "/asset/door/hav16/pwd2.png",
		type: "Aluminium Door",
		desc: "It fully reflects the modern people's demand for a simple life, and highlights the quality of life through elegant and simple decoration styles.",
		category: "Mansion"
	},
	{
		id: 17,
		doorcode: "HDM24032",
		mainimg: "/asset/door/hav17/pwd1.png",
		img2: "/asset/door/hav17/pwd2.png",
		type: "Aluminium Door",
		desc: "TWO-COLOR PIONEER Innovative interpretation of natural aesthetics.Discovering beauty is the joy of exploration, shaping beauty is the pursuit of artThe lines are simple and bright, the colors are soft yet steady, noble and majestic and extremely beautiful and appealing.",
		category: "Mansion"
	},
	{
		id: 18,
		doorcode: "HDM24015,16",
		mainimg: "/asset/door/hav18/pwd1.png",
		img2: "/asset/door/hav18/pwd2.png",
		type: "Aluminium Door",
		desc: "IMITATION WOOD GRAIN SHAPE A door is more than an entrance- it is a passage to tranquility.The natural wood grain texture evokes simplicity and authenticity, creating a connection to nature within modern living Crafted with an all - aluminum structure, it embodies elegance and strength, balancing contemporary design with timeless warmth.Beyondfunctionality, it transforms space into a serene retreat, shielding the home from the rush of the outside world and embracing a quiet, comfortable way of life.",
		category: "Mansion"
	},
	{
		id: 19,
		doorcode: "HDM24012,13",
		mainimg: "/asset/door/hav19/pwd1.png",
		img2: "/asset/door/hav19/pwd2.png",
		type: "Aluminium Door",
		desc: "THE REALM OF HAPPINESS! The highest form of harmony is found in the quiet companionship of a well- crafted space - where doors frame life's moments, offeringglimpses of beauty and the passage of time.Their essence is not defined by mere visual impact but by the atmosphere they create. More than just an entryway, they embody a way of thinking and a way of living.",
		category: "Mansion"
	},
	{
		id: 20,
		doorcode: "HDM24003,04",
		mainimg: "/asset/door/hav20/pwd1.png",
		img2: "/asset/door/hav20/pwd2.png",
		type: "Aluminium Door",
		desc: "LUXURIOUS ' OFF AXIS DOOR 'The highest state of happiness is to accompany someone, watch the scenery of a house, and count the time leisurely It does not express its essence through visual impact, but  exists in the air, It is a way of thinking and a way of life.",
		category: "Mansion"
	},
];

export default doors
