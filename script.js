console.clear()
// initializing some values
let attempts = 0;
let totalAttempt = 5;
let won = 0;
let lost = 0;
// Finding element 

const cardBody = document.querySelector(".card-body")
const formField = cardBody.querySelector("form");
const guessingNumber = formField.querySelector("#guessingNumber");
const checkButton = formField.querySelector(".button");
const resultText = cardBody.querySelector(".result-text");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const attemptsNumber = remainingAttempts.querySelector(".attemptsNumber");
const lostWonMessage = cardBody.querySelector(".score");




formField.addEventListener("submit",(e) => {
	e.preventDefault()
	attempts++
	if(attempts === totalAttempt){
		guessingNumber.disabled = true;
		checkButton.innerHTML = "refresh"
		remainingAttempts.innerHTML = "Game Over";
		remainingAttempts.style.color = "red";
		remainingAttempts.style.fontWeight = "900";
	}
	else if(attempts > totalAttempt){
		const alertMesssage = alert("Click OK if you're sure.");
		if(!alertMesssage){
			location.reload("file:///D:/web-class-anisul-islam/js-tutorial/projects/Guessing-game/index.html")
		};
	}
	
	else if(attempts < totalAttempt){
		let guessNumber = Number(guessingNumber.value);
		checkResult(guessNumber);
		attemptsNumber.innerHTML = (totalAttempt - attempts);
	}
	
	guessingNumber.value = "";
})

const checkResult = (value) => {
	const randomNumber = getRandomNumber(5);
	if(randomNumber === value){
		won++
	}else{
		setTimeout(() => {
			resultText.innerHTML = `You have lost; guessing number is: <span class="randomNumber">${randomNumber}</span>`;			
			resultText.classList.add("display");
		},100)		
		setTimeout(() => {		
			resultText.classList.remove("display");
		},1800)		
		lost++
	}
	lostWonMessage.innerHTML = `won: ${won} / lost: ${lost}`
}

const getRandomNumber = (limit) => {
	return Math.floor(Math.random() * limit + 1);
}
