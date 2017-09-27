// var x = function x() {
//   alert(false);
// };

// $(function(){
//   document.getElementById('nav-plus-toggle').onclick = x;
// });

function headerClick() {
  $( "img#nav-plus-toggle" ).click(function() {
    $("nav#toggle-nav ul").toggleClass("expanded");
    $("img#nav-plus-toggle").toggleClass("rotated");
  });
}

$(function(){
  headerClick();
});
