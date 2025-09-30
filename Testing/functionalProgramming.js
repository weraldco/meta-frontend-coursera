// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
	// Declare a variable for the message
	// WRITE YOUR CODE HERE
	let message = `%c` + txt;

	// Declare a variable for the style
	// WRITE YOUR CODE HERE
	let style = `color:${color};`;

	// Append background style to the style variable
	// WRITE YOUR CODE HERE
	style += `background: ${background};`;

	// Append font size style to the style variable
	// WRITE YOUR CODE HERE
	style += `font-size: ${fontSize};`;

	// Log the message with the applied style
	// WRITE YOUR CODE HERE
	console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
	// Declare a fontStyle variable with default styles
	// WRITE YOUR CODE HERE
	let fontStyle = 'color:red; font-size:50px';

	// Check if the reason is "birthday"
	// WRITE YOUR CODE HERE
	if (reason == 'birthday') {
		console.log(`%cHappy Birthday`, fontStyle);
	}

	// If reason is "champions", log a congrats message
	// WRITE YOUR CODE HERE
	else if (reason == 'champions') {
		console.log('%cCongratulations for being a Champion!', fontStyle);
	}

	// For any other reason, log a default message
	// WRITE YOUR CODE HERE
	else {
		console.log(`%cIt's just a normal day`, fontStyle);
	}
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
	// Call consoleStyler with the first four arguments
	// WRITE YOUR CODE HERE
	consoleStyler(color, background, fontSize, txt);
	// Call celebrateStyler with the last argument
	// WRITE YOUR CODE HERE
	celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE
styleAndCelebrate('red', 'white', '12px', 'Hello World!', 'birthday');
