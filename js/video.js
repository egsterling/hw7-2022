var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.getElementById("play").addEventListener("click", function() {
	console.log("play button clicked");
	video.play();
	var volume = document.getElementById("slider").value;
	video.volume = volume / 100;
	document.getElementById("volume").innerHTML = volume + "%";
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("pause button clicked");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	video.currentTime += 10;
	if(video.ended) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
	var muter = document.getElementById("mute");
	if(muter.innerHTML === "Mute") {
		muter.innerHTML = "Unmute";
		video.muted = true;
	}
	else {
		muter.innerHTML = "Mute";
		video.muted = false;
	}
});

document.getElementById("slider").addEventListener("input", function() {
	var newVolume = document.getElementById("slider").value;
	video.volume = newVolume / 100;
	document.getElementById("volume").innerHTML = newVolume + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	document.getElementById("player1").className = "oldSchool";
});

document.getElementById("orig").addEventListener("click", function() {
	document.getElementById("player1").className = "video";
});


