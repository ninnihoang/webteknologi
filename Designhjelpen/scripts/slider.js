var sliderIndex = 1;
showSlider (sliderIndex); // display first image

function plusSlider(n){
  showSlider (sliderIndex += n);
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

  x[sliderIndex-1].style.display = "block"; //show image with given slideIndex

/*
    setTimeout(showSlider, 4000);
    sliderIndex ++;
*/

}
