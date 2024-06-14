function changeProfession() {
	const professions = [
		"front end designer",
		"web developer",
		"back end developer",
		"full stack developer",
		"web application developer",
		"software engineer"
	];
	const output = document.getElementById("profession");

	let index = professions.indexOf(output.innerText.toLowerCase());
	let nextIndex;

	if ((index+1) === professions.length) {
		nextIndex = 0;
	} else {
		nextIndex = (index+1);
	}

	const nextProfession = professions[nextIndex]

	for (let i = output.innerText.length; i >= 0; i--) {
		console.log(i)
		output.innerText = output.innerText.substring(0, output.innerText.length - 1);
		console.log(output.innerText)
	}

	for (let i = 0; i < nextProfession.length; i++) {
		const alphabet = nextProfession.split("")[i];
		console.log(alphabet)
		output.innerText = output.innerText + alphabet;
	}

}

function writeAndDeleteStrings(strings, delay) {
	const outputElement = document.getElementById('profession'); // Make sure to have an element with id 'output' in your HTML
	let currentStringIndex = 0;
	let currentString = '';
	let charIndex = 0;
	let isDeleting = false;

	function type() {
		if (!isDeleting) {
			// Writing the current string
			currentString += strings[currentStringIndex].charAt(charIndex);
			charIndex++;
			outputElement.textContent = currentString;

			if (charIndex === strings[currentStringIndex].length) {
				// Start deleting after writing the full string
				setTimeout(() => {
					isDeleting = true;
				}, delay);
			}
		} else {
			// Deleting the current string
			currentString = currentString.substring(0, currentString.length - 1);
			outputElement.textContent = currentString;

			if (currentString.length === 0) {
				// Move to the next string after deleting the current one
				currentStringIndex = (currentStringIndex + 1) % strings.length;
				charIndex = 0;
				isDeleting = false;
			}
		}
	}

	// Typing interval
	setInterval(type, 100); // Change 100 to control typing speed
}

// Example usage:
const strings = [
	"front end designer.",
	"web developer.",
	"back end developer.",
	"full stack developer.",
	"web application developer.",
	"software engineer."
];
const delay = 2000; // 2 seconds delay before deleting
writeAndDeleteStrings(strings, delay);

// (() => {
// 	const height = `${window.screen.height/2}px`;
// 	let style = document.createElement('style');
// 	style.innerHTML = `.main { height: ${height} !important; }`;
// 	document.head.appendChild(style);
// })()

function disableScrollSnapping() {
	changeClassProperty(".grand-father", "unset");

	const button = document.getElementById("scroll-behavior-button")
	button.setAttribute("onclick", "enableScrollSnapping()");
	button.innerText = "Enable scroll snap"
}

function enableScrollSnapping() {
	changeClassProperty(".grand-father", "y mandatory");

	const button = document.getElementById("scroll-behavior-button")
	button.setAttribute("onclick", "disableScrollSnapping()");
	button.innerText = "Disable scroll snap"
}

function changeClassProperty(className, type) {
	for (let i = 0; i < document.styleSheets.length; i++) {
		let styleSheet = document.styleSheets[i];

		try {
			let rules = styleSheet.cssRules || styleSheet.rules;
			for (let j = 0; j < rules.length; j++) {
				let rule = rules[j];
				if (rule.selectorText === className) {
					rule.style.scrollSnapType = type;
					break;
				}
			}
		} catch (error) {
			console.error('Error accessing CSS rules: ', error);
		}
	}
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});