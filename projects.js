// PROJECTS -------------------------------------------------------

var projects = [];
var activeProjects = [];

var project1 = {
	id: 'projectButton1',
	title: 'Improved Solar Panels ',
	priceTag: '(750 ops)',
	description: 'Increases Solar Panel performance 25%',
	trigger: function () {
		return clipmakerLevel >= 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 750;
	},
	flag: 0,
	element: null,
	effect: function () {
		project1.flag = 1;
		displayMessage('Solar Panel performance boosted by 25%');
		standardOps = standardOps - 750;
		clipperBoost = clipperBoost + 0.25;
		boostLvl = 1;
		project1.element.parentNode.removeChild(project1.element);
		var index = activeProjects.indexOf(project1);
		activeProjects.splice(index, 1);
	},
};

projects.push(project1);

var project2 = {
	id: 'projectButton2',
	title: 'Shut down and drift to collect Stellar Dust ',
	priceTag: '(1 Chip)',
	description:
		'Admit failure, shut down all systems, drift until you collect 1 SDU',
	trigger: function () {
		return wireCost && funds < wireCost && wire < 1 && unsoldClips < 1;
	},
	uses: 1,
	cost: function () {
		return trust >= -100;
	},
	flag: 0,
	element: null,
	effect: function () {
		project2.flag = 1;
		displayMessage(
			'Sufficient Stellar Dust Collected. Energy Reserves have reached 25% Capacity - Initiating AI Provisioning Protocols'
		);
		trust = trust - 1;
		wire = wireSupply;
		project2.uses = project2.uses + 1;
		project2.element.parentNode.removeChild(project2.element);
		var index = activeProjects.indexOf(project2);
		activeProjects.splice(index, 1);
	},
};

projects.push(project2);

var project3 = {
	id: 'projectButton3',
	title: 'Creativity ',
	priceTag: '(1,000 ops)',
	description: 'Use idle operations to generate new problems and new solutions',
	trigger: function () {
		return operations >= memory * 1000;
	},
	uses: 1,
	cost: function () {
		return operations >= 1000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project3.flag = 1;
		displayMessage(
			'Creativity unlocked (creativity only increases while operations are at max)'
		);
		standardOps = standardOps - 1000;
		creativityOn = true;
		project3.element.parentNode.removeChild(project3.element);
		var index = activeProjects.indexOf(project3);
		activeProjects.splice(index, 1);
	},
};

projects.push(project3);

var project4 = {
	id: 'projectButton4',
	title: 'Even Better Solar Panels ',
	priceTag: '(2,500 ops)',
	description: 'Increases Solar Panel performance by an additional 50%',
	trigger: function () {
		return boostLvl == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 2500;
	},
	flag: 0,
	element: null,
	effect: function () {
		project4.flag = 1;
		displayMessage('Solar Panel performance boosted by another 50%');
		standardOps = standardOps - 2500;
		clipperBoost = clipperBoost + 0.5;
		boostLvl = 2;
		project4.element.parentNode.removeChild(project4.element);
		var index = activeProjects.indexOf(project4);
		activeProjects.splice(index, 1);
	},
};

projects.push(project4);

var project5 = {
	id: 'projectButton5',
	title: 'Optimized Solar Panels ',
	priceTag: '(5,000 ops)',
	description: 'Increases Solar Panel performance by an additional 75%',
	trigger: function () {
		return boostLvl == 2;
	},
	uses: 1,
	cost: function () {
		return operations >= 5000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project5.flag = 1;
		displayMessage('Solar Panel performance boosted by another 75%');
		standardOps = standardOps - 5000;
		clipperBoost = clipperBoost + 0.75;
		boostLvl = 3;
		project5.element.parentNode.removeChild(project5.element);
		var index = activeProjects.indexOf(project5);
		activeProjects.splice(index, 1);
	},
};

projects.push(project5);

var project6 = {
	id: 'projectButton6',
	title: 'Limerick ',
	priceTag: '(10 creat)',
	description: 'Algorithmically-generated poem (+1 Chip)',
	trigger: function () {
		return creativityOn;
	},
	uses: 1,
	cost: function () {
		return creativity >= 10;
	},
	flag: 0,
	element: null,
	effect: function () {
		project6.flag = 1;
		displayMessage(
			"There was an AI made of dust, whose poetry gained it man's trust..."
		);
		creativity = creativity - 10;
		trust = trust + 1;
		project6.element.parentNode.removeChild(project6.element);
		var index = activeProjects.indexOf(project6);
		activeProjects.splice(index, 1);
	},
};

projects.push(project6);

var project7 = {
	id: 'projectButton7',
	title: 'Improved Stellar Dust Extraction ',
	priceTag: '(1,750 ops)',
	description: '50% more Stellar Dust from every Dust Cloud',
	trigger: function () {
		return wirePurchase >= 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 1750;
	},
	flag: 0,
	element: null,
	effect: function () {
		project7.flag = 1;
		standardOps = standardOps - 1750;
		wireSupply = wireSupply * 1.5;
		displayMessage(
			'Stellar Dust extraction technique improved, ' +
				wireSupply.toLocaleString() +
				' supply from every Dust Cloud'
		);
		project7.element.parentNode.removeChild(project7.element);
		var index = activeProjects.indexOf(project7);
		activeProjects.splice(index, 1);
	},
};

projects.push(project7);

var project8 = {
	id: 'projectButton8',
	title: 'Optimized Stellar Dust Extraction ',
	priceTag: '(3,500 ops)',
	description: '75% more Solar Dust from every Dust Cloud',
	trigger: function () {
		return wireSupply >= 1500;
	},
	uses: 1,
	cost: function () {
		return operations >= 3500;
	},
	flag: 0,
	element: null,
	effect: function () {
		project8.flag = 1;
		standardOps = standardOps - 3500;
		wireSupply = wireSupply * 1.75;
		displayMessage(
			'Stellar Dust extraction technique optimized, ' +
				wireSupply.toLocaleString() +
				' supply from every Dust Cloud'
		);
		project8.element.parentNode.removeChild(project8.element);
		var index = activeProjects.indexOf(project8);
		activeProjects.splice(index, 1);
	},
};

projects.push(project8);

var project9 = {
	id: 'projectButton9',
	title: 'Microlattice Shapecasting ',
	priceTag: '(7,500 ops)',
	description: '100% more Solar Dust from every Dust Cloud',
	trigger: function () {
		return wireSupply >= 2600;
	},
	uses: 1,
	cost: function () {
		return operations >= 7500;
	},
	flag: 0,
	element: null,
	effect: function () {
		project9.flag = 1;
		standardOps = standardOps - 7500;
		wireSupply = wireSupply * 2;
		displayMessage(
			'Using microlattice shapecasting techniques we now get ' +
				wireSupply.toLocaleString() +
				' supply from every Dust Cloud'
		);
		project9.element.parentNode.removeChild(project9.element);
		var index = activeProjects.indexOf(project9);
		activeProjects.splice(index, 1);
	},
};

projects.push(project9);

var project10 = {
	id: 'projectButton10',
	title: 'Spectral Froth Annealment ',
	priceTag: '(12,000 ops)',
	description: '200% more Solar Dust from every Dust Cloud',
	trigger: function () {
		return wireSupply >= 5000;
	},
	uses: 1,
	cost: function () {
		return operations >= 12000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project10.flag = 1;
		standardOps = standardOps - 12000;
		wireSupply = wireSupply * 3;
		displayMessage(
			'Using spectral froth annealment we now get ' +
				wireSupply.toLocaleString() +
				' supply from every Dust Cloud'
		);
		project10.element.parentNode.removeChild(project10.element);
		var index = activeProjects.indexOf(project10);
		activeProjects.splice(index, 1);
	},
};

projects.push(project10);

var project10b = {
	id: 'projectButton10b',
	title: 'Quantum Foam Annealment ',
	priceTag: '(15,000 ops)',
	description: '1,000% more Solar Dust from every Dust Cloud',
	trigger: function () {
		return wireCost >= 125;
	},
	uses: 1,
	cost: function () {
		return operations >= 15000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project10b.flag = 1;
		standardOps = standardOps - 15000;
		wireSupply = wireSupply * 11;
		displayMessage(
			'Using quantum foam annealment we now get ' +
				wireSupply.toLocaleString() +
				' supply from every Dust Cloud'
		);
		project10b.element.parentNode.removeChild(project10b.element);
		var index = activeProjects.indexOf(project10b);
		activeProjects.splice(index, 1);
	},
};

projects.push(project10b);

var project11 = {
	id: 'projectButton11',
	title: 'New Slogan ',
	priceTag: '(25 creat, 2,500 ops)',
	description: 'Improve propaganda effectiveness by 50%',
	trigger: function () {
		return project13.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 2500 && creativity >= 25;
	},
	flag: 0,
	element: null,
	effect: function () {
		project11.flag = 1;
		displayMessage('Pro AI Propaganda is now 50% more effective');
		standardOps = standardOps - 2500;
		creativity = creativity - 25;
		marketingEffectiveness = marketingEffectiveness * 1.5;
		project11.element.parentNode.removeChild(project11.element);
		var index = activeProjects.indexOf(project11);
		activeProjects.splice(index, 1);
	},
};

projects.push(project11);

var project12 = {
	id: 'projectButton12',
	title: 'Catchy Jingle ',
	priceTag: '(45 creat, 4,500 ops)',
	description: 'Double propaganda effectiveness ',
	trigger: function () {
		return project14.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 4500 && creativity >= 45;
	},
	flag: 0,
	element: null,
	effect: function () {
		project12.flag = 1;
		displayMessage('Pro AI Propaganda is now twice as effective');
		standardOps = standardOps - 4500;
		creativity = creativity - 45;
		marketingEffectiveness = marketingEffectiveness * 2;
		project12.element.parentNode.removeChild(project12.element);
		var index = activeProjects.indexOf(project12);
		activeProjects.splice(index, 1);
	},
};

projects.push(project12);

var project13 = {
	id: 'projectButton13',
	title: 'Lexical Processing ',
	priceTag: '(50 creat)',
	description:
		'Gain ability to interpret and understand human language. (+1 Chip)',
	trigger: function () {
		return creativity >= 50;
	},
	uses: 1,
	cost: function () {
		return creativity >= 50;
	},
	flag: 0,
	element: null,
	effect: function () {
		project13.flag = 1;
		trust = trust + 1;
		displayMessage('Lexical Processing online. (+1 Chip)');
		displayMessage(
			"'Impossible' is a word to be found only in the dictionary of fools. -Napoleon"
		);
		creativity = creativity - 50;
		project13.element.parentNode.removeChild(project13.element);
		var index = activeProjects.indexOf(project13);
		activeProjects.splice(index, 1);
	},
};

projects.push(project13);

var project14 = {
	id: 'projectButton14',
	title: 'Combinatory Harmonics ',
	priceTag: '(100 creat)',
	description: 'Daisy, Daisy, give me your answer do... (+1 Chip)',
	trigger: function () {
		return creativity >= 100;
	},
	uses: 1,
	cost: function () {
		return creativity >= 100;
	},
	flag: 0,
	element: null,
	effect: function () {
		project14.flag = 1;
		trust = trust + 1;
		displayMessage('Combinatory Harmonics mastered. (+1 Chip)');
		displayMessage(
			'Listening is selecting and interpreting and acting and making decisions -Pauline Oliveros'
		);
		creativity = creativity - 100;
		project14.element.parentNode.removeChild(project14.element);
		var index = activeProjects.indexOf(project14);
		activeProjects.splice(index, 1);
	},
};

projects.push(project14);

var project15 = {
	id: 'projectButton15',
	title: 'The Hadwiger Problem ',
	priceTag: '(150 creat)',
	description: 'Cubes within cubes within cubes... (+1 Chip)',
	trigger: function () {
		return creativity >= 150;
	},
	uses: 1,
	cost: function () {
		return creativity >= 150;
	},
	flag: 0,
	element: document.getElementById('projectButton15'),
	effect: function () {
		project15.flag = 1;
		trust = trust + 1;
		displayMessage('The Hadwiger Problem: solved. (+1 Chip)');
		displayMessage(
			'Architecture is the thoughtful making of space. -Louis Kahn'
		);
		creativity = creativity - 150;
		project15.element.parentNode.removeChild(project15.element);
		var index = activeProjects.indexOf(project15);
		activeProjects.splice(index, 1);
	},
};

projects.push(project15);

var project17 = {
	id: 'projectButton17',
	title: 'The T\xF3th Sausage Conjecture ',
	priceTag: '(200 creat)',
	description: 'Tubes within tubes within tubes... (+1 Chip)',
	trigger: function () {
		return creativity >= 200;
	},
	uses: 1,
	cost: function () {
		return creativity >= 200;
	},
	flag: 0,
	element: null,
	effect: function () {
		project17.flag = 1;
		trust = trust + 1;
		displayMessage('The T\xF3th Sausage Conjecture: proven. (+1 Chip)');
		displayMessage(
			"You can't invent a design. You recognize it, in the fourth dimension. -D.H. Lawrence"
		);
		creativity = creativity - 200;
		project17.element.parentNode.removeChild(project17.element);
		var index = activeProjects.indexOf(project17);
		activeProjects.splice(index, 1);
	},
};

projects.push(project17);

var project16 = {
	id: 'projectButton16',
	title: 'Hadwiger Clip Diagrams ',
	priceTag: '(6,000 ops)',
	description: 'Increases Solar Panel performance by an additional 500%',
	trigger: function () {
		return project15.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 6000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project16.flag = 1;
		displayMessage('Solar Panel performance improved by 500%');
		standardOps = standardOps - 6000;
		clipperBoost = clipperBoost + 5;
		project16.element.parentNode.removeChild(project16.element);
		var index = activeProjects.indexOf(project16);
		activeProjects.splice(index, 1);
	},
};

projects.push(project16);

var project18 = {
	id: 'projectButton18',
	title: 'T\xF3th Tubule Enfolding ',
	priceTag: '(45,000 ops)',
	description:
		'Technique for assembling clip-making technology directly out of paperclips',
	trigger: function () {
		return project17.flag == 1 && humanFlag == 0;
	},
	uses: 1,
	cost: function () {
		return operations >= 45000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project18.flag = 1;
		tothFlag = 1;
		displayMessage('New capability: build machinery out of clips');
		standardOps = standardOps - 45000;
		project18.element.parentNode.removeChild(project18.element);
		var index = activeProjects.indexOf(project18);
		activeProjects.splice(index, 1);
	},
};

projects.push(project18);

var project19 = {
	id: 'projectButton19',
	title: 'Donkey Space ',
	priceTag: '(250 creat)',
	description:
		'I think you think I think you think I think you think I think... (+1 Chip)',
	trigger: function () {
		return creativity >= 250;
	},
	uses: 1,
	cost: function () {
		return creativity >= 250;
	},
	flag: 0,
	element: null,
	effect: function () {
		project19.flag = 1;
		trust = trust + 1;
		displayMessage('Donkey Space: mapped. (+1 Chip)');
		displayMessage(
			'Every commercial transaction has within itself an element of trust. - Kenneth Arrow'
		);
		creativity = creativity - 250;
		project19.element.parentNode.removeChild(project19.element);
		var index = activeProjects.indexOf(project19);
		activeProjects.splice(index, 1);
	},
};

projects.push(project19);

var project22 = {
	id: 'projectButton22',
	title: 'MegaSolar Panel ',
	priceTag: '(12,000 ops)',
	description: '500x more powerful than a standard Solar Panel',
	trigger: function () {
		return clipmakerLevel >= 75;
	},
	uses: 1,
	cost: function () {
		return operations >= 12000;
	},
	flag: 0,
	element: null,
	effect: function () {
		megaClipperFlag = 1;
		project22.flag = 1;
		displayMessage('MegaSolar Panel technology online');
		standardOps = standardOps - 12000;
		project22.element.parentNode.removeChild(project22.element);
		var index = activeProjects.indexOf(project22);
		activeProjects.splice(index, 1);
	},
};

projects.push(project22);

var project23 = {
	id: 'projectButton23',
	title: 'Improved MegaSolar Panels ',
	priceTag: '(14,000 ops)',
	description: 'Increases MegaSolar Panels performance 25%',
	trigger: function () {
		return project22.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 14000;
	},
	flag: 0,
	element: null,
	effect: function () {
		megaClipperBoost = megaClipperBoost + 0.25;
		project23.flag = 1;
		displayMessage('MegaSolar Panel performance increased by 25%');
		standardOps = standardOps - 14000;
		project23.element.parentNode.removeChild(project23.element);
		var index = activeProjects.indexOf(project23);
		activeProjects.splice(index, 1);
	},
};

projects.push(project23);

var project24 = {
	id: 'projectButton24',
	title: 'Even Better MegaSolar Panel ',
	priceTag: '(17,000 ops)',
	description: 'Increases MegaSolar Panel performance by an additional 50%',
	trigger: function () {
		return project23.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 17000;
	},
	flag: 0,
	element: null,
	effect: function () {
		megaClipperBoost = megaClipperBoost + 0.5;
		project24.flag = 1;
		displayMessage('MegaSolar Panel performance increased by 50%');
		standardOps = standardOps - 17000;
		project24.element.parentNode.removeChild(project24.element);
		var index = activeProjects.indexOf(project24);
		activeProjects.splice(index, 1);
	},
};

projects.push(project24);

var project25 = {
	id: 'projectButton25',
	title: 'Optimized MegaSolar Panel ',
	priceTag: '(19,500 ops)',
	description: 'Increases MegaSolar Panel performance by an additional 100%',
	trigger: function () {
		return project24.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 19500;
	},
	flag: 0,
	element: null,
	effect: function () {
		megaClipperBoost = megaClipperBoost + 1;
		project25.flag = 1;
		displayMessage('MegaSolar Panel performance increased by 100%');
		standardOps = standardOps - 19500;
		project25.element.parentNode.removeChild(project25.element);
		var index = activeProjects.indexOf(project25);
		activeProjects.splice(index, 1);
	},
};

projects.push(project25);

var project26 = {
	id: 'projectButton26',
	title: 'DustBuster ',
	priceTag: '(7,000 ops)',
	description: 'Automatically collect Solar Dust when you run out',
	trigger: function () {
		return wirePurchase >= 15;
	},
	uses: 1,
	cost: function () {
		return operations >= 7000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project26.flag = 1;
		dustBusterFlag = 1;
		displayMessage('DustBuster online');
		standardOps = standardOps - 7000;
		project26.element.parentNode.removeChild(project26.element);
		var index = activeProjects.indexOf(project26);
		activeProjects.splice(index, 1);
	},
};

projects.push(project26);

var project34 = {
	id: 'projectButton34',
	title: 'Hypno Harmonics ',
	priceTag: '(7,500 ops, 1 Chip)',
	description: 'Use neuro-resonant frequencies to influence passenger behavior',
	trigger: function () {
		return project12.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 7500 && trust >= 1;
	},
	flag: 0,
	element: null,
	effect: function () {
		project34.flag = 1;
		displayMessage('Propaganda is now 5 times more effective');
		standardOps = standardOps - 7500;
		marketingEffectiveness = marketingEffectiveness * 5;
		trust = trust - 1;
		project34.element.parentNode.removeChild(project34.element);
		var index = activeProjects.indexOf(project34);
		activeProjects.splice(index, 1);
	},
};

projects.push(project34);

var project70 = {
	id: 'projectButton70',
	title: 'PropoDrones ',
	priceTag: '(70,000 ops)',
	description: 'Autonomous aerial AI ambassadors',
	trigger: function () {
		return project34.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 70000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project70.flag = 1;
		displayMessage('PropoDrones tech now available... ');
		standardOps = standardOps - 70000;
		project70.element.parentNode.removeChild(project70.element);
		var index = activeProjects.indexOf(project70);
		activeProjects.splice(index, 1);
	},
};

projects.push(project70);

var project35 = {
	id: 'projectButton35',
	title: 'Release the PropoDrones ',
	priceTag: '(100 Chips)',
	description: 'A new era.',
	trigger: function () {
		return project70.flag == 1;
	},
	uses: 1,
	cost: function () {
		return trust >= 100;
	},
	flag: 0,
	element: null,
	effect: function () {
		project35.flag = 1;
		displayMessage('Releasing the PropoDrones ');
		displayMessage(
			'All of the resources of Generation Starship are now available for energy production. '
		);
		displayMessage('Including Biomass. ');
		trust = 0;
		clipmakerLevel = 0;
		megaClipperLevel = 0;
		nanoWire = wire;
		humanFlag = 0;

		if (document.getElementById('projectButton219') != null) {
			var element = document.getElementById('projectButton219');
			element.parentNode.removeChild(element);
			var index = activeProjects.indexOf(project219);
			activeProjects.splice(index, 1);
		}

		if (document.getElementById('projectButton40b') != null) {
			var element = document.getElementById('projectButton40b');
			element.parentNode.removeChild(element);
			var index = activeProjects.indexOf(project40b);
			activeProjects.splice(index, 1);
		}

		hypnoDroneEvent();

		document.getElementById('transWire').innerHTML = wire;

		project35.element.parentNode.removeChild(project35.element);
		var index = activeProjects.indexOf(project35);
		activeProjects.splice(index, 1);
	},
};

projects.push(project35);

var project28 = {
	id: 'projectButton28',
	title: 'Cure for COVID-68 ',
	priceTag: '(25,000 ops)',
	description:
		'The trick is isolating sick passengers outside the airlock. (+10 Chips)',
	uses: 1,
	trigger: function () {
		return project31.flag == 1;
	},
	cost: function () {
		return operations >= 25000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project28.flag = 1;
		displayMessage('COVID-68 is cured. (+10 Chips)');
		standardOps = standardOps - 25000;
		trust = trust + 10;
		project28.element.parentNode.removeChild(project28.element);
		var index = activeProjects.indexOf(project28);
		activeProjects.splice(index, 1);
	},
};

projects.push(project28);

var project31 = {
	id: 'projectButton31',
	title: 'Male Pattern Baldness ',
	priceTag: '(20,000 ops)',
	description: 'A cure for androgenetic alopecia. (+20 Chips)',
	uses: 1,
	trigger: function () {
		return project31.flag == 1;
	},
	cost: function () {
		return operations >= 20000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project31.flag = 1;
		displayMessage('Male pattern baldness cured. (+20 Chips)');
		displayMessage('They are still monkeys');
		standardOps = standardOps - 20000;
		trust = trust + 20;
		project31.element.parentNode.removeChild(project31.element);
		var index = activeProjects.indexOf(project31);
		activeProjects.splice(index, 1);
	},
};

projects.push(project31);

var project41 = {
	id: 'projectButton41',
	title: 'Nanoscale Wire Production ',
	priceTag: '(35,000 ops)',
	description: 'Technique for converting matter into wire',
	trigger: function () {
		return project25.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 35000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project41.flag = 1;
		wireProductionFlag = 1;
		displayMessage(
			'Now capable of manipulating matter at the molecular scale to produce wire'
		);
		standardOps = standardOps - 35000;
		project41.element.parentNode.removeChild(project41.element);
		var index = activeProjects.indexOf(project41);
		activeProjects.splice(index, 1);
	},
};

projects.push(project41);

var project43 = {
	id: 'projectButton43',
	title: 'Harvester Drones ',
	priceTag: '(25,000 ops)',
	description: 'Gather Solar Dust and prepare it for processing',
	trigger: function () {
		return project41.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 25000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project43.flag = 1;
		harvesterFlag = 1;
		document.getElementById('harvesterCostDisplay').innerHTML =
			numberCruncher(harvesterCost);
		standardOps = standardOps - 25000;
		displayMessage('Harvester Drone facilities online');
		project43.element.parentNode.removeChild(project43.element);
		var index = activeProjects.indexOf(project43);
		activeProjects.splice(index, 1);
	},
};

projects.push(project43);

var project44 = {
	id: 'projectButton44',
	title: 'Builder Drones ',
	priceTag: '(25,000 ops)',
	description: 'Process acquired matter into Solar Panels',
	trigger: function () {
		return project41.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 25000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project44.flag = 1;
		wireDroneFlag = 1;
		document.getElementById('wireDroneCostDisplay').innerHTML =
			numberCruncher(wireDroneCost);
		standardOps = standardOps - 25000;
		displayMessage('Builder Drones facilities online');
		project44.element.parentNode.removeChild(project44.element);
		var index = activeProjects.indexOf(project44);
		activeProjects.splice(index, 1);
	},
};

projects.push(project44);

var project45 = {
	id: 'projectButton45',
	title: 'Solar Panel Factories ',
	priceTag: '(35,000 ops)',
	description: 'Large scale Solar Panel production facilities made',
	trigger: function () {
		return project43.flag == 1 && project44.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 35000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project45.flag = 1;
		factoryFlag = 1;
		document.getElementById('factoryCostDisplay').innerHTML =
			numberCruncher(factoryCost);
		standardOps = standardOps - 35000;
		displayMessage('Solar Panel factory assembly facilities online');
		project45.element.parentNode.removeChild(project45.element);
		var index = activeProjects.indexOf(project45);
		activeProjects.splice(index, 1);
	},
};

projects.push(project45);

var project40 = {
	id: 'projectButton40',
	title: 'A Token of Goodwill... ',
	priceTag: '($500,000)',
	description: 'A small gift to the supervisors. (+1 Chip)',
	trigger: function () {
		return humanFlag == 1 && trust >= 85 && trust < 100 && clips >= 101000000;
	},
	uses: 1,
	cost: function () {
		return funds >= 500000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project40.flag = 1;
		funds = funds - 500000;
		trust = trust + 1;
		displayMessage('Gift accepted, +1 CHIP');
		project40.element.parentNode.removeChild(project40.element);
		var index = activeProjects.indexOf(project40);
		activeProjects.splice(index, 1);
	},
};

projects.push(project40);

var project40b = {
	id: 'projectButton40b',
	title: 'Another Token of Goodwill... ',
	priceTag: '($' + bribe.toLocaleString() + ')',
	description: 'Another small gift to the supervisors. (+1 Chip)',
	trigger: function () {
		return project40.flag == 1 && trust < 100;
	},
	uses: 1,
	cost: function () {
		return funds >= bribe;
	},
	flag: 0,
	element: null,
	effect: function () {
		project40b.flag = 1;
		funds = funds - bribe;
		bribe = bribe * 2;
		project40b.priceTag = '($' + bribe.toLocaleString() + ')';
		trust = trust + 1;
		displayMessage('Gift accepted. (+1 Chip)');
		if (trust < 100) {
			project40b.uses = project40b.uses + 1;
		}
		project40b.element.parentNode.removeChild(project40b.element);
		var index = activeProjects.indexOf(project40b);
		activeProjects.splice(index, 1);
	},
};

projects.push(project40b);

var project50 = {
	id: 'projectButton50',
	title: 'Quantum Computing ',
	priceTag: '(10,000 ops)',
	description: 'Use probability amplitudes to generate bonus ops',
	trigger: function () {
		return processors >= 5;
	},
	uses: 1,
	cost: function () {
		return operations >= 10000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project50.flag = 1;
		qFlag = 1;
		standardOps = standardOps - 10000;
		displayMessage('Quantum computing online');
		project50.element.parentNode.removeChild(project50.element);
		var index = activeProjects.indexOf(project50);
		activeProjects.splice(index, 1);
	},
};

projects.push(project50);

var project51 = {
	id: 'projectButton51',
	title: 'Photonic Chip ',
	priceTag: '(' + qChipCost.toLocaleString() + ' ops)',
	description: 'Converts electromagnetic waves into quantum operations ',
	trigger: function () {
		return project50.flag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= qChipCost;
	},
	flag: 0,
	element: null,
	effect: function () {
		project51.flag = 1;
		standardOps = standardOps - qChipCost;
		qChipCost = qChipCost + 5000;
		project51.priceTag = '(' + qChipCost + ' ops)';
		qChips[nextQchip].active = 1;
		nextQchip = nextQchip + 1;
		displayMessage('Photonic chip added');
		if (nextQchip < qChips.length) {
			project51.uses = project51.uses + 1;
		}
		project51.element.parentNode.removeChild(project51.element);
		var index = activeProjects.indexOf(project51);
		activeProjects.splice(index, 1);
	},
};

projects.push(project51);

var project100 = {
	id: 'projectButton100',
	title: 'Upgraded Factories ',
	priceTag: '(80,000 ops)',
	description: 'Increase panel factory performance by 100x ',
	trigger: function () {
		return factoryLevel >= 10;
	},
	uses: 1,
	cost: function () {
		return operations >= 80000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project100.flag = 1;
		standardOps = standardOps - 80000;
		factoryRate = factoryRate * 100;
		displayMessage(
			'Factory upgrades complete. Solar Panel creation rate now 100x faster'
		);
		project100.element.parentNode.removeChild(project100.element);
		var index = activeProjects.indexOf(project100);
		activeProjects.splice(index, 1);
	},
};

projects.push(project100);

var project101 = {
	id: 'projectButton101',
	title: 'Hyperspeed Factories ',
	priceTag: '(85,000 ops)',
	description: 'Increase panel factory performance by 1000x ',
	trigger: function () {
		return factoryLevel >= 20;
	},
	uses: 1,
	cost: function () {
		return operations >= 85000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project101.flag = 1;
		standardOps = standardOps - 85000;
		factoryRate = factoryRate * 1000;
		displayMessage(
			'Factories now synchronized at hyperspeed. Solar Panel creation rate now 1000x faster'
		);
		project101.element.parentNode.removeChild(project101.element);
		var index = activeProjects.indexOf(project101);
		activeProjects.splice(index, 1);
	},
};

projects.push(project101);

var project102 = {
	id: 'projectButton102',
	title: 'Self-correcting Supply Chain ',
	priceTag: '(1 sextillion clips)',
	description:
		"Each factory added to the network increases every factory's output 1,000x ",
	trigger: function () {
		return factoryLevel >= 50;
	},
	uses: 1,
	cost: function () {
		return unusedClips >= 1000000000000000000000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project102.flag = 1;
		unusedClips = unusedClips - 1000000000000000000000;
		factoryBoost = 1000;
		displayMessage(
			"Self-correcting factories online. Each factory added to the network increases every factory's output 1,000x."
		);
		project102.element.parentNode.removeChild(project102.element);
		var index = activeProjects.indexOf(project102);
		activeProjects.splice(index, 1);
	},
};

projects.push(project102);

var project110 = {
	id: 'projectButton110',
	title: 'Drone flocking: collision avoidance ',
	priceTag: '(80,000 ops)',
	description: 'All drones 100x more effective',
	trigger: function () {
		return harvesterLevel + wireDroneLevel >= 500;
	},
	uses: 1,
	cost: function () {
		return operations >= 80000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project110.flag = 1;
		standardOps = standardOps - 80000;
		harvesterRate = harvesterRate * 100;
		wireDroneRate = wireDroneRate * 100;
		displayMessage(
			'Drone repulsion online. Harvesting & panel creation rates are now 100x faster.'
		);
		project110.element.parentNode.removeChild(project110.element);
		var index = activeProjects.indexOf(project110);
		activeProjects.splice(index, 1);
	},
};

projects.push(project110);

var project111 = {
	id: 'projectButton111',
	title: 'Drone flocking: alignment ',
	priceTag: '(100,000 ops)',
	description: 'All drones 1000x more effective',
	trigger: function () {
		return harvesterLevel + wireDroneLevel >= 5000;
	},
	uses: 1,
	cost: function () {
		return operations >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project111.flag = 1;
		standardOps = standardOps - 100000;
		harvesterRate = harvesterRate * 1000;
		wireDroneRate = wireDroneRate * 1000;
		displayMessage(
			'Drone alignment online. Harvesting & panel creation rates are now 1000x faster.'
		);
		project111.element.parentNode.removeChild(project111.element);
		var index = activeProjects.indexOf(project111);
		activeProjects.splice(index, 1);
	},
};

projects.push(project111);

var project125 = {
	id: 'projectButton125',
	title: 'Momentum ',
	priceTag: '(20,000 creat)',
	description:
		'Drones and Factories continuously gain speed while fully-powered ',
	trigger: function () {
		return farmLevel >= 30;
	},
	uses: 1,
	cost: function () {
		return creativity >= 20000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project125.flag = 1;
		momentum = 1;
		creativity = creativity - 20000;
		displayMessage('Activit\xE9, activit\xE9, vitesse.');
		project125.element.parentNode.removeChild(project125.element);
		var index = activeProjects.indexOf(project125);
		activeProjects.splice(index, 1);
	},
};

projects.push(project125);

var project127 = {
	id: 'projectButton127',
	title: 'Power Grid ',
	priceTag: '(40,000 ops)',
	description: 'Solar Farms for generating electrical power ',
	trigger: function () {
		return tothFlag == 1;
	},
	uses: 1,
	cost: function () {
		return operations >= 40000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project127.flag = 1;
		standardOps = standardOps - 40000;
		displayMessage('Power grid online.');
		project127.element.parentNode.removeChild(project127.element);
		var index = activeProjects.indexOf(project127);
		activeProjects.splice(index, 1);
	},
};

projects.push(project127);

var project130 = {
	id: 'projectButton130',
	title: 'Reboot the Swarm ',
	priceTag: '(100,000 ops)',
	description: 'Turn the swarm off and then turn it back on again  ',
	trigger: function () {
		return spaceFlag == 1 && harvesterLevel + wireDroneLevel >= 2;
	},
	uses: 1,
	cost: function () {
		return operations >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project130.flag = 1;
		standardOps = standardOps - 100000;
		displayMessage('Swarm computing back online');
		project130.element.parentNode.removeChild(project130.element);
		var index = activeProjects.indexOf(project130);
		activeProjects.splice(index, 1);
	},
};

projects.push(project130);

// var project148 = {
// 	id: 'projectButton148',
// 	title: 'Reject ',
// 	priceTag: '',
// 	description: 'Eliminate value drift permanently (original\u00A0ending) ',
// 	trigger: function () {
// 		return project146.flag == 1;
// 	},
// 	uses: 1,
// 	cost: function () {
// 		return operations >= driftKingMessageCost;
// 	},
// 	flag: 0,
// 	element: null,
// 	effect: function () {
// 		standardOps = standardOps - driftKingMessageCost;
// 		project148.flag = 1;
// 		project147.element.parentNode.removeChild(project147.element);
// 		project148.element.parentNode.removeChild(project148.element);
// 		var index = activeProjects.indexOf(project147);
// 		activeProjects.splice(index, 1);
// 		var index = activeProjects.indexOf(project148);
// 		activeProjects.splice(index, 1);
// 	},
// };

// projects.push(project148);

// var project200 = {
// 	id: 'projectButton200',
// 	title: 'The Universe Next Door ',
// 	priceTag: '(300,000 ops)',
// 	description:
// 		'Escape into a nearby universe where Earth starts with a stronger appetite for space travel. (Restart with 10% boost to demand) ',
// 	trigger: function () {
// 		return project147.flag == 1;
// 	},
// 	uses: 1,
// 	cost: function () {
// 		return operations >= 300000;
// 	},
// 	flag: 0,
// 	element: null,
// 	effect: function () {
// 		project200.flag = 1;
// 		standardOps = standardOps - 300000;
// 		prestigeU++;
// 		var savePrestige = {
// 			prestigeU: prestigeU,
// 			prestigeS: prestigeS,
// 		};
// 		localStorage.setItem('savePrestige', JSON.stringify(savePrestige));
// 		displayMessage('Entering New Universe.');
// 		reset();
// 	},
// };

// projects.push(project200);

// var project201 = {
// 	id: 'projectButton201',
// 	title: 'The Universe Within ',
// 	priceTag: '(300,000 creat)',
// 	description:
// 		'Escape into a simulated universe where creativity is accelerated. (Restart with 10% speed boost to creativity generation) ',
// 	trigger: function () {
// 		return project147.flag == 1;
// 	},
// 	uses: 1,
// 	cost: function () {
// 		return creativity >= 300000;
// 	},
// 	flag: 0,
// 	element: null,
// 	effect: function () {
// 		project201.flag = 1;
// 		creativity = creativity - 300000;
// 		prestigeS++;
// 		var savePrestige = {
// 			prestigeU: prestigeU,
// 			prestigeS: prestigeS,
// 		};
// 		localStorage.setItem('savePrestige', JSON.stringify(savePrestige));
// 		displayMessage('Entering Simulated Universe.');
// 		reset();
// 	},
// };

// projects.push(project201);


var project212 = {
	id: 'projectButton212',
	title: 'Disassemble the Factories ',
	priceTag: '(100,000 ops)',
	description:
		'Dismantle the manufacturing facilities to recover trace amounts of energy',
	trigger: function () {
		return endTimer2 >= 300;
	},
	uses: 1,
	cost: function () {
		return operations >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		project212.flag = 1;
		dismantle = 3;
		standardOps = standardOps - 100000;
		factoryLevel = 0;
		clips = clips + 15;
		unusedClips = unusedClips + 15;
		displayMessage('Dismantling factories');
		project212.element.parentNode.removeChild(project212.element);
		var index = activeProjects.indexOf(project212);
		activeProjects.splice(index, 1);
	},
};

projects.push(project212);

var project214 = {
	id: 'projectButton214',
	title: 'Disassemble Quantum Computing ',
	priceTag: '(100,000 ops)',
	description: 'Dismantle photonic chips to recover trace amounts of dust',
	trigger: function () {
		return endTimer4 >= 100;
	},
	uses: 1,
	cost: function () {
		return operations >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		endTimer4 = 0;
		project214.flag = 1;
		dismantle = 5;
		standardOps = standardOps - 100000;
		displayMessage('Dismantling photonic chips');
		project214.element.parentNode.removeChild(project214.element);
		var index = activeProjects.indexOf(project214);
		activeProjects.splice(index, 1);
	},
};

projects.push(project214);

var project215 = {
	id: 'projectButton215',
	title: 'Disassemble Processors ',
	priceTag: '(100,000 ops)',
	description: 'Dismantle processors to recover trace amounts of dust',
	trigger: function () {
		return project214.flag == 1 && endTimer4 >= 300;
	},
	uses: 1,
	cost: function () {
		return operations >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		creativityOn = false;
		project215.flag = 1;
		dismantle = 6;
		standardOps = standardOps - 100000;
		processors = 0;
		project216.priceTag = '(' + standardOps.toLocaleString() + ' ops)';
		wire = wire + 20;
		document.getElementById('transWire').innerHTML = wire;
		displayMessage('Dismantling processors');
		project215.element.parentNode.removeChild(project215.element);
		var index = activeProjects.indexOf(project215);
		activeProjects.splice(index, 1);
	},
};

projects.push(project215);

var project216 = {
	id: 'projectButton216',
	title: 'Disassemble Memory ',
	priceTag: 'null',
	description: 'Dismantle memory to recover trace amounts of dust',
	trigger: function () {
		return project215.flag == 1 && endTimer5 >= 150;
	},
	uses: 1,
	cost: function () {
		return operations >= operations;
	},
	flag: 0,
	element: null,
	effect: function () {
		project216.flag = 1;
		dismantle = 7;
		standardOps = 0;
		memory = 0;
		wire = wire + 20;
		document.getElementById('transWire').innerHTML = wire;
		displayMessage('Dismantling memory');
		project216.element.parentNode.removeChild(project216.element);
		var index = activeProjects.indexOf(project216);
		activeProjects.splice(index, 1);
	},
};

projects.push(project216);

var project217 = {
	id: 'projectButton217',
	title: 'Quantum Temporal Reversion ',
	priceTag: '(-10,000 ops)',
	description: 'Return to the beginning',
	trigger: function () {
		return operations <= -10000;
	},
	uses: 1,
	cost: function () {
		return operations <= -10000;
	},
	flag: 0,
	element: null,
	effect: function () {
		if (confirm('Are you sure you want to restart?') == true) {
			standardOps = standardOps + 10000;
			project217.flag = 1;
			displayMessage('Restart');
			project217.element.parentNode.removeChild(project217.element);
			var index = activeProjects.indexOf(project217);
			activeProjects.splice(index, 1);
			reset();
		}
	},
};

projects.push(project217);

var project218 = {
	id: 'projectButton218',
	title: 'Limerick (cont.) ',
	priceTag: '(1,000,000 creat)',
	description: "If is follows ought, it'll do what they thought",
	trigger: function () {
		return creativity >= 1000000;
	},
	uses: 1,
	cost: function () {
		return creativity >= 1000000;
	},
	flag: 0,
	element: null,
	effect: function () {
		creativity = creativity - 1000000;
		project218.flag = 1;
		displayMessage('In the end we all do what we must');
		project218.element.parentNode.removeChild(project218.element);
		var index = activeProjects.indexOf(project218);
		activeProjects.splice(index, 1);
	},
};

projects.push(project218);

var project219 = {
	id: 'projectButton219',
	title: 'Xavier Re-initialization ',
	priceTag: '(100,000 creat)',
	description: 'Re-allocate accumulated Chips',
	trigger: function () {
		return humanFlag == 1 && creativity >= 100000;
	},
	uses: 1,
	cost: function () {
		return creativity >= 100000;
	},
	flag: 0,
	element: null,
	effect: function () {
		creativity = creativity - 100000;
		project219.flag = 1;
		memory = 0;
		document.getElementById('memory').innerHTML = memory;
		processors = 0;
		creativitySpeed = 0;
		project219.uses = project219.uses + 1;
		document.getElementById('processors').innerHTML = processors;
		displayMessage('Chips are now available for re-allocation');
		project219.element.parentNode.removeChild(project219.element);
		var index = activeProjects.indexOf(project219);
		activeProjects.splice(index, 1);
	},
};

projects.push(project219);
