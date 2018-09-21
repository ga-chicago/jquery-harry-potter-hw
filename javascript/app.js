console.log('welcome to hogwarts');

const $container = $('.container');
console.log($container);

const $heading = $('<h1/>').text("YOU'RE A WIZARD, ANDY");
$container.prepend($heading);


const $name = $('<h2/>').text('Andy the Wizard');

$container.append($name);

const $house = $('<h3/>').text("House Ravenclaw");

$container.append($house);

const $pet = $('<h4 class = "owl" />').text("Kevin the Owl");

$container.append($pet);

const $wand = $('<h4/>').text("Holly Wand with Unicorn Hair Core");

$container.append($wand);
