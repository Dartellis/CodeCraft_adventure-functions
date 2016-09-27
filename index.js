/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

var heroGender;
if (Math.random() < 0.5) {
	heroGender = "heroine";
} else {
	heroGender = "hero";
}

function randomElement(array){
	return array[Math.floor(Math.random() * monsters.length)];
}

function new_adventure(){
	chosenMonster = randomElement(monsters);
	chosenWeapon = randomElement(weapons);
	chosenAction = randomElement(actions);
	document.getElementById("adventure").innerText = output;
	output = "Armed with only their " + chosenWeapon + " our " + heroGender + " " + chosenAction + " the evil " + chosenMonster + "!";
	return output;
}

var chosenMonster = randomElement(monsters);
var chosenWeapon = randomElement(weapons);
var chosenAction = randomElement(actions);

var output;

document.getElementById("adventure").innerText = new_adventure();

document.getElementById("new_adventure").onclick = function() {new_adventure()};


/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
