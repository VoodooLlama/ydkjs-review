
// Spread
const array = [ 1, 2, 3 ];

console.log('Spread:\n', ...array);

// Rest
function restArgs(firstParam, ...args) {
	console.log('Rest:\n', firstParam, args);
}

restArgs(...array);

// Example 1
const [ header ] = array;

console.log('Header:\n', header);

// Example 2
const matrix3x3 = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ]
];

const flatMatrix = [].concat(...matrix3x3); // [].concat(matrix[ 0 ], matrix[ 1 ], matrix[ 2 ])

console.log('flatMatrix:\n', ...flatMatrix);

// Object Spread
const objSpread = {
	id: 1,
	name: 'value',
	localId: 3531531
};

const { localId,...newObject } = objSpread;