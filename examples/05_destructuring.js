
// Legacy Assignment of Array Values
var arr = [ 1, 2, 3 ];

var legacyObj = { x: 1, y: 2, z: 3 };
var arrItem1 = arr [ 0 ],
	arrItem2 = arr [ 1 ],
	arrItem3 = arr [ 2 ];


// Array Destructuring
const [ v1, v2, v3 ] = arr;
const [ first, ...rest ] = arr;

console.log('Values: ', v1, v2, v3);
console.log('First: ', first, ' Rest: ', ...rest);

// Legacy Assignment of Object values
var vertex = { x: 1, y: 3 };

var legacyX = vertex.x;
var legacyY = vertex.y;

console.log(legacyX, legacyY);

// Object Destructuring
let { x, y } = vertex;

console.log('Vertex1: ', x, y);

// Named Destructuring
const response = {
	user_id: '123',
	site_id: '456'
};
const {
	user_id: userId,
	site_id: siteId
} = response;

console.log('UserId: ', userId, ' SiteId: ', siteId);

// Assignments
const vertex2 = { x: 5, y: -2 };
({ x, y } = vertex2);

console.log('Vertex2: ', x, y);

[ y, x ] = [ x, y ];

console.log('Vertex2 Flipped: ', x, y);

// Default Values
const vertex3 = { x: 1, y: 2 };

let { x: x1, y: y1, z: z1 = 0 } = vertex3;

console.log('Vertex3: ', x1, y1, z1);

// Nesting
const lib = {
	util: {
		doSomething: () => {
			console.log('something');
		}
	}
}

const { util: { doSomething }, util } = lib;

util.doSomething();
doSomething();

// The Danger Zone
const { a: { b: { c: { d: h }, e: i }, f: j }, g: k } = { a: { b: { c: { d: 1 }, e: 2 }, f: 3 }, g: 4 };
console.log(h, i, j, k);