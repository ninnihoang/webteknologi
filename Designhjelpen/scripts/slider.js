
var timer = null;

var sliderIndex = 1;

window.onload= showSlider(sliderIndex);


function plusSlider(){
  showSlider (sliderIndex += 1);
    clearTimeout(timer);
    
}
function minusSlider(){
  showSlider (sliderIndex -= 1);
    clearTimeout(timer);
}


function showSlider(n){
  var i = 0;
  var x = document.getElementsByClassName("sliderImg");
  if(n > x.length){sliderIndex = 1} //reset the slideIndex
  if(n < 1){sliderIndex = x.length};
  console.log(n); // show the last image
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none" ; // hide images
  }

  
  x[sliderIndex-1].style.display = "block"; //show image with given sliderIndex
    
  timer = setInterval(plusSlider, 8000);
    
}


