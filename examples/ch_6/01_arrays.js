// Array helper methods

const header = (name) => console.log(`\n${ name }\n========\n`);
const logArray = (arr) => {
	return arr.forEach((value, i) => {
		console.log(`Index ${ i }: ${ value }, length: ${ value.length }`);
	});
};

// Array.of for constructing arrays from n-parameters
header('Array.of');
const arrayConstructor = new Array(7);
const arrayOfNumber = Array.of(7);
const arrayOfObject = Array.of({ key: 'value' }, { key: 'value2' });

logArray([ arrayConstructor, arrayOfNumber, arrayOfObject ]);

// Array.from
header('Array.from');
const arrayLike = {
	length: 3,
	1: 'y'
};

const arrayLikeToArray = Array.from(arrayLike);
const arrayLikeToArrayMap = Array.from(arrayLike, (v, i) => v ? v.toUpperCase() : i);

logArray([ arrayLikeToArray, arrayLikeToArrayMap ]);

function returnArgs() {
	//return arguments;
	// return Array.prototype.slice.call(arguments);
	return Array.from(arguments);
}

const args = returnArgs('X', 'Y', 'Z');

console.log(args, args.slice(0));

// Array.copyWithin
header('Array.copyWithin');

const numericArray = [ 1, 2, 3, 4, 5 ];

logArray([ numericArray ]);

numericArray.copyWithin(3, 0, 3);

logArray([ numericArray ]);

// Array.fill
header('Array.fill');

const zeroArray = Array(2).fill(0);
const integerArray = [ 2, 5, 7, 8 ].fill(0, 1, 3);

logArray([ zeroArray, integerArray ]);

// Array.find

const stringArray = [ 'hello', 'friends' ];

const isStringValueFound = stringArray.indexOf('hello') !== -1;
const isStringValueFoundFind = stringArray.find((val) => val === 'hello');

console.log(isStringValueFound, isStringValueFoundFind);

// Array.findIndex
const vertices = [ { x: 1, y: 2 }, { x: 3, y: 6 }];

const vertexIndex = vertices.findIndex((v) => v.x === 1);
const vertexIndexNotFound = vertices.findIndex((v) => v.x === 2);

console.log(vertexIndex, vertexIndexNotFound);

// Array.entries, values, keys
header('Array.entries(), .keys()')
const entries = numericArray.entries();
const keys = numericArray.keys();

logArray([ entries, keys ]);

for (const entry of entries) {
	logArray([ entry ]);
}

for (const key of keys) {
	logArray([ key ]);
}





