// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate"));

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
const today = Date.now();
if (lastVisitDate === 0) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;	
} else {
	const msToDays = 84600000;
	const daysSinceLastVisit = (today - lastVisitDate) / msToDays;
	
	if (daysSinceLastVisit < 1) {
		visitsDisplay.textContent = 'Back so soon! Awesome!';
	} else {
		let n = `${daysSinceLastVisit.toFixed(0)} days`;
		if (daysSinceLastVisit < 2) {
			n = '1 day ';
		}
		visitsDisplay.textContent = `You last visited ${n} days ago.`;
	}
	
}

// store the new visit total into localStorage, key=lastVisitDate;
localStorage.setItem("lastVisitDate", today);
