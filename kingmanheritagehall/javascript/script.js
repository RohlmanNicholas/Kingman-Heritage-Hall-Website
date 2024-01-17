// Base JS    

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#000000";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

function increaseTextSize() {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    var style = window.getComputedStyle(elements[i]);
    var fontSize = parseFloat(style.fontSize);
    elements[i].style.fontSize = (fontSize * 1.1) + 'px';
  }
}