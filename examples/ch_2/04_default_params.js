// Simple Types
function defaultParams(value = 'Something Else') {
	return value;
}

const val1 = defaultParams('Something');
const val2 = defaultParams();

console.log('val1:', val1, ', val2:', val2);

// Complex Types
function magnitude(vector3 = { x: 0, y: 0, z: 0 }) {
	const vertexValues = Object.values(vector3);
	const vertexSquareSum = vertexValues.reduce((accum, value) => {
		return accum += value * value;
	}, 0);

	return Math.sqrt(vertexSquareSum);
}

const mag1 = magnitude({ x: 0, y: 4, z: 0 });
const mag2 = magnitude();

console.log('Magnitudes: ', mag1, mag2);

// Functions as default parameters
function errorHandler(e) {
	console.log('It broke.');

	return new Error(e);
}

function tryStringifyJSON(json, errorFn = errorHandler) {
	try {
		const parsedJSON = JSON.stringify(json);

		return parsedJSON;
	}
	catch (e) {
		errorFn(e);
	}
}

const stringifiedJSON = tryStringifyJSON({
	value: '1'
});

console.log(stringifiedJSON);