const dishes = [
	{
		dish: 'Italian pasta',
		price: 9.55,
	},
	{
		dish: 'Rice with veggies',
		price: 8.65,
	},
	{
		dish: 'Chicken with potatoes',
		price: 15.55,
	},
	{
		dish: 'Vegetarian Pizza',
		price: 6.45,
	},
];

function computeFinalPrice(hasTaxed) {
	if (hasTaxed) {
		dishes.map((dish) => {
			console.log(
				`Dish: ${dish.dish}, Price: $ ${dish.price * 0.2 + dish.price}`
			);
		});
	} else {
		dishes.map((dish) => {
			console.log(`Dish: ${dish.dish}, Price: $ ${dish.price}`);
		});
	}
}

computeFinalPrice(false);
