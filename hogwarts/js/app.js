//Year 1
const $container = $('#container');
//console.log($container);
$container.prepend('<h1></h1>');
const $h1 = $('h1');
//console.log($h1);
$h1.text('Hogwarts');

//Year 2
$container.append('<h2>Chris</h2>');
$container.append('<h3>Ravenclaw</h2>');
$container.append('<h4 class="snake">Colonel<h4>');
$container.append('<h4>Prometheus<h4>');

//Year 3
$container.append('<ul storage="trunk"></ul>')
$('ul').append('<li>butter beer</li>');
$('ul').append('<li class="secret">invisibility cloak</li>');
$('ul').append('<li class="secret">magic map</li>');
$('ul').append('<li class="secret">time turner</li>');
$('ul').append('<li class="snake">leash</li>');
$('ul').append('<li>Bertie Bott&apos;s Every Flavor Beans</li>');

//Year 4
$container.append('<h5>Spring 2017</h5>');
$container.append('<table><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Herbology, History of Magic</td></tr><tr><td>Tuesday</td><td>Charms, Potions</td></tr><tr><td>Wednesday</td><td>Transfiguration, Defense Against the Dark Arts</td></tr><tr><td>Thursday</td><td>Quidditch practice, chill with Hagrid</td></tr><tr><td>Friday</td><td>Arithmancy</td></tr></table>');

//Year 5
$('h4').eq(2).remove();
$('li').eq(0).remove();
$('h4.snake').after('<h4>Prometheus 2<h4>');
$('h4').eq(1).css('color','indigo');
$('h4.snake').appendTo('ul');
$('h4.snake').appendTo('h3');

//Year 6
$('li.secret').delay(2000).hide('slow');
$('li.secret').delay(2000).show('slow');
$('li.snake').addClass('cabbage');
$('li.snake').removeClass('cabbage');