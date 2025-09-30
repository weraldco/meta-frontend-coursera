// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = [
	'cheese',
	'sour cream',
	'milk',
	'yogurt',
	'ice cream',
	'milkshake',
];

function logDairy() {
	for (const a of dairy) {
		console.log(a);
	}
}

logDairy();
// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties

const animal = {
	canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
	for (const [key, val] of Object.entries(bird)) {
		console.log(`${key}: ${val}`);
	}
}

birdCan();

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan() {
	for (const b in bird) {
		console.log(b + ': ' + bird[b]);
	}
}

animalCan();
