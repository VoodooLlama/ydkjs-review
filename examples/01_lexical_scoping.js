var x = 'Julio';

// Functional Scoping
function hello() {
	var y = 'Jones';

	function name() {
		return `${ x } ${ y }`;
	}

	return `Hey howdy ${ name() }!`;
}

const greeting = hello();
console.log(greeting);

// console.log(name());

const library = {
	header: 'captains log: ',
	alert: function(value) {
		console.log(this.header, value);
	}
};

// Closures / IIFE's
(function alertValue(library) {
	var y = 2;

	library.alert(`x: ${ x }, y: ${ y }`);
})(library);



// console.log(x, y);