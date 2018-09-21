console.log("works");

const $container = $("#container");
// console.log($container);

const $h1 = $("<h1/>");
$('#container').append('<h1>Hogwarts</h1>')
// console.log($h1);
const $h2 = $("<h2/>");
// console.log($h2);
$('#container').append('<h2>Fil</h1>')
const $h3 = $("<h3/>");

// console.log($h3);
$('#container').append('<h3>Slytherin</h3>')
$('h3').addClass('classbcilearnedhow');
const $h4 = $("<h4/>");
$('#container').append("<h6>Mac</h6>")
$('h6').addClass("cat")
// console.log($h4);
const $h4wand = $("<h4/>")
$('#container').append("<h4>Awesome Wand</h4>")
//--------  Year 3

const $ul = $('<ul/>')
$("#container").append("<ul></ul>")
$('#ul').attr('storage')
$('#ul').val('trunk')
// console.log($ul);
// $('#ul').append("<li>butterbeer</li>")

const $li = $('<li/>')
$('ul').append("<li>butterbeer</li>")
$('ul').append("<li>invisibility</li>")
$('ul').append("<li>magic map</li>")
$('ul').append("<li>time turner</li>")
$('li').addClass('secret');
$('ul').append("<li>leash</li>")
$('li').addClass('cat');
$('ul').append("<li>Bertie Bott's Every Flavor[Jelly] Beans </li>")
$('container').append("ul")



$('#container').append('<h5>Spring 2017</h5>');

$('#container').append('<table><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Programmination</td></tr><tr><td>Tuesday</td><td>ughhhhhhhhhology</td></tr><tr><td>Wednesday</td><td>Wand Class</td></tr><tr><td>Thursday</td><td>Vexology</td></tr><tr><td>Friday</td><td>Generic Harry Potter Class</td></tr></table>');



//-------year 5
$("h4").remove();
$('li').first().remove();
$('li').first().append("<h4>Lame Ass Wand</h4>");
$('h4').first().addClass('newWand');

$('.newWand').css('color', 'maroon');

$('h6.cat').appendTo('ul');
$('h6.cat').appendTo('h4');


///year6
// $('li.secret').hide('slow');
$('li.secret').hide('slow').delay(2000);

$('li.secret').show('slow');

$('h6.cat').addClass('cabbage');
$('h6.cat').removeClass('cabbage');


// $('#container').append('<table></table>');
// $('table').addClass('table');
// // console.log($table);
// // const $thead = $('#thead');
// $('table').append('<thead></thead>');
// $('table').append('<thead1></thead1>');

// // console.log($tr);
// // const $th = $('<th/>');
// $('thead').append("<th>Day</th1>");
// $('thead1').append("<th>Classes</th>");
// // const $tr = $('<tr/>');
// $('th').append('<tr></tr>');
// $('tr').addClass('#programmination');
// // const $td = $("<td/>");
// $('th').append('<td>Monday</td>');
// $('th').append('<td>Programmination</td>');
// // $('th').append('<tr></tr>');
// $('tr').append('<td>Tuesday</td>');
// $('tr').append('<td>ughhhhhhhhhology</td>');







// <table>
//   <thead>
//     <tr>
//       <th>Header content 1</th>
//       <th>Header content 2</th>
//     </tr>
//   </thead>
// const $td = $('<td/>');
// $('#container').append('<td>1</td>');


// console.log($tr);
