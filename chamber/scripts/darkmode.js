const modeButton = document.querySelector(".switch");
const body = document.querySelector("body");
const darkModeInput = document.querySelector("#dmSlider");

modeButton.addEventListener("click", () => {
    if (darkModeInput.checked) {
        body.classList.add('darkMode');  
 		
 	} else {
 		body.classList.remove('darkMode');
 		
 	}
 });
