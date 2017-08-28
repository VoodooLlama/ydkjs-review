let x = 0;

// Block Scoping
if (x === 0) {
	let y = 2;

	console.log(x, y);
}

// console.log(x, y);

// TDZ
// console.log(a);
// console.log(z);
let z;
var a;

// Example 1
const array = [];
for (let i = x; i < 10; i++) {
	array.push(i);
}

console.log(array);

// Example 2
