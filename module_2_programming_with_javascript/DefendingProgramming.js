function letterFinder(word, match) {
	try {
		if (typeof word != 'string' || typeof match != 'string') {
			throw new Error('word and match given are not string.');
		}
		if (match.length <= 0) {
			throw new Error('No value in match or invalid length.');
		}
		if (word.length <= 1) {
			throw new Error('word length must be 2 characters or more.');
		}

		for (var i = 0; i < word.length; i++) {
			if (word[i] == match) {
				//if the current character at position i in the word is equal to the match
				console.log('Found the', match, 'at', i);
			} else {
				console.log('---No match found at', i);
			}
		}
	} catch (err) {
		console.log('Error: ', err.message);
	}
}

letterFinder('test', '');
