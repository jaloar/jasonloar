var myName = prompt("What's your name, buddy?");

var myAge = prompt("How old are you?");

function greeting() {
	console.log("Hello World! " + myName +" is pretty cool!");
	if (myAge < 40) {
		console.log("Young you are!");
	}
	else {
		console.log("Geezer!");
	}
}