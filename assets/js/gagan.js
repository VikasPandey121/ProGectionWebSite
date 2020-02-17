
    $("#gaganHide").css("opacity","0");
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  console.log("cvgbhnj")
  if (document.body.scrollTop > 0.7*screen.availHeight || document.documentElement.scrollTop > 0.7*screen.availHeight) {
    $("#gaganHide").css("opacity","1");
  } else {
    $("#gaganHide").css("opacity","0");
}
}
