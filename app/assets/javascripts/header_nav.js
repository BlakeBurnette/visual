var headerClick = function headerClick() {
  $("nav#toggle-nav ul").toggleClass("expanded");
  $("img#nav-plus-toggle").toggleClass("rotated");
}

setTimeout(function(){ headerClick() }, 1000);
