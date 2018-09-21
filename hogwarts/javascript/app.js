console.log("JS IS RUNNING");

// Declare variable, assign it the value of existing JQuery object
const $container = $('.container');

// console.log($container);			// ==> TEST

// Declare variable, assign it value of now created JQuery object
const $h1 = $('<h1/>');

// console.log($h1);				// ==> TEST

// Add text to object
$h1.text('Hogwarts');

// To $container append $h1
$container.append($h1);

// console.log($h1);				// ==> TEST