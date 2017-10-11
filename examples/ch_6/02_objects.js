
const header = (name) => console.log(`\n${ name }\n========\n`);

header('Object.is');

const isStrictEqual = 0 === -0;
const isObjectEqual = Object.is(0, -0);

console.log(isStrictEqual, isObjectEqual);

header('Object.getOwnPropertySymbols');

const object = {
	[ Symbol.iterator ]: function* () {
		yield 1;
	}
}

const symbols = Object.getOwnPropertySymbols(object);

console.log(symbols);

header('Object.setPrototypeOf');

const objA = {
	sum: () => { 
		return this.reduce((accum, val) => {
			return accum + val;
		})
	}
};

const objB = {};

Object.setPrototypeOf(objB, objA);

console.log(objB.sum);

header('Object.assign');

const initObj = {
	x: 1,
	y: 2
};

Object.assign(initObj, { z: 3 });

const addObj = Object.assign({}, initObj, { z: 4 });

console.log(initObj, addObj);

header('Number');

console.log('Constants:')
console.log(Number.EPSILON, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

header('Number.isNaN');

const isValueNaN = Number.isNaN(NaN);
const isValueNotNaN = Number.isNaN(1);

console.log(isValueNaN, isValueNotNaN);

header('Unicode Characters');

const thumbsUpEmoji = String.fromCodePoint(0x1F44D);

console.log(thumbsUpEmoji, thumbsUpEmoji.length);

const emojiCount = thumbsUpEmoji + thumbsUpEmoji;

let emojiCountLength = 0;
for (const codePoint of emojiCount) {
	emojiCountLength++;
}

console.log(emojiCountLength);

const codePoint = thumbsUpEmoji.codePointAt(0);

console.log(codePoint.toString(16));

header('String.raw');

console.log(String.raw`\n\n`);

header('String.repeat');

console.log("hello".repeat(3));

header('String.startsWith, .endsWith');

const helloWorld = 'Hello World';
const starts = helloWorld.startsWith('Hell');
const ends = helloWorld.endsWith('d');

console.log(starts, ends);


header('String.includes');

const includeString = 'dog food';

console.log(includeString.includes('dog'));
