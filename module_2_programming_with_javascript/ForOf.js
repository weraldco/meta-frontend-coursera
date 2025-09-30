const car = {
	engine: true,
	steering: true,
	speed: 'slow',
};

// for (const props of Object.keys(car)) {
// 	console.log(props + ' - ' + car[props]);
// }

const sportsCar = Object.create(car);

sportsCar.speed = 'fast';

console.log(sportsCar);

for (const prop of Object.keys(sportsCar)) {
	console.log(prop + ' : ' + sportsCar[prop]);
}

for (prop in sportsCar) {
	console.log(prop);
}
