console.log('welcome to hogwarts');

const $container = $('.container');
console.log($container);

const $heading = $('<h1/>').text("YOU'RE A WIZARD, ANDY");
$container.prepend($heading);


const $name = $('<h2/>').text('Andy the Wizard');

$container.append($name);

const $house = $('<h3/>').text("House Ravenclaw");

$container.append($house);

const $pet = $('<h4 class="owl" />').text("Kevin the Owl");

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

$container.append($('<h5>Spring 2017</h5>'));
$container.append($('<table><thead><th>Day</th><th>Classes</th></thead><tr><td>Monday</td><td>Quidditch Practice</td></tr><tr><td>Tuesday</td><td>Charms, Potions</td></tr><tr><td>Wednesday</td><td>Herbology</td></tr><tr><td>Thursday</td><td>Defense against the dark arts</td></tr><tr><td>Tuesday</td><td>Transfiguration</td></tr></table>'));


$('h4').eq(1).remove();
$('li').eq(0).remove();

$('h4.owl').after('<h4>Bejeweled Dementor Bone Wand</h4>');
// use remove and append again or just use appendTo method.....
// decided on appendTo though understand this could be done in a couple of different ways
$('h4.owl').appendTo($storageList);

$('h4.owl').appendTo('h3');





