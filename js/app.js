console.log('hogwarts')

//----------------YEAR 1

// Query for your div with the id of container and set it to a variable named $container
const $container = $('#container');
// console.log $container
console.log($container)
// Create an <h1> element and set it to a variable called $h1 and console log it
const $h1 = $('<h1/>')
console.log($h1);
$('#container').append('<h1>Hogwarts</h1>')
console.log($h1)
// Add some text inside the h1 element. Example text: 'Hogwarts'
const $h2 = $('<h2/>')
console.log($h2)
//h2 element with your name
$('#container').append('<h2>Josh Hepworth</h2>')
console.log($h2)
//h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $('<h3/>')
console.log($h3)
$('#container').append('<h3>Ravenclaw</h3>')
// h4 element with your pet's name
const $h4 = $('<h4/>')
$('#container').append('<h4>Theodore</h4>')
//this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
$('h4').addClass('dog')
console.log($h4)
// h4 element with your wand
const $h4wand = $('<h4/>')
$('#container').append('<h4>Elder Wand</h4>')









