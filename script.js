let countdown;
function timer(seconds){
	const now = Date.now();
	const then = now + seconds * 1000;
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// check to see if we should stop t
		if(secondsLeft <= 0){
			clearInterval(countdown);
			return;
		}
		// display
		console.log(secondsLeft);
	}, 1000);
}