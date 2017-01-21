let countdown;
const timerDisplay = document.querySelector('.display__time-left')

function timer(seconds){
	const now = Date.now();
	const then = now + seconds * 1000;
	dispalyTimeLeft(seconds);
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check to see if we should stop t
		if(secondsLeft < 0){
			clearInterval(countdown);
			return;
		}
		// display
		dispalyTimeLeft(secondsLeft);
	}, 1000);
}

function dispalyTimeLeft(seconds){
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
	const end = new Data(timestamp);
}