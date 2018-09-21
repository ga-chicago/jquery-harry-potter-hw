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

const $storageList = $('<ul storage="trunk"></ul');

$container.append($storageList);

$storageList.append($('<li>Butter Beer</li>'));

$storageList.append($('<li class="secret">Invisibility Cloak</li>'));

$storageList.append($('<li class="secret">Magic Map</li>'));

$storageList.append($('<li class="secret">Time Turner</li>'));
$storageList.append($('<li class="owl">Leash</li>'));
$storageList.append($("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"));
