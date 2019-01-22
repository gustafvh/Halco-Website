/*

<!-- How to Write a Function -->
function functionName() {
	// body of the function
}
<!-- How to Change CSS of an ID on the Page -->
document.getElementById("idName").style.property = 'value';
<!-- How to Run a Function on Button Click -->
< button onclick="functionName()">buttonName</button>
<!-- Create a Variable -->
var nameOfVariable = value;
<!-- How to Use an If-Statement -->
if (condition) {
	// do this if the condition is true
}
<!-- How to Set Text of an HTML Element in JS -->
document.getElementById("idName").innerHTML = 'newTextInElt'

// */
// function buttonHoverFunction(){
//   document.getElementById("btn-primary").style.margin = '100';
// }



// function buttonClickFunction() {
//   document.getElementById("btn-primary").style.margin = '90';


//}



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

