var date = new Date();
var hour = date.getHours();
var photosNow = document.getElementById("changePhotos");
var imageClassname=["image1","image2","image3"];

function changePhotos(){
  if (hour > 16){ //after 4 at noon
    photosNow.className += " " + imageClassname[0]; // add a image class in img
    photosNow.src = "img/outsideID1.jpg";
  } else if (hour > 8) { // after 8 in the morning
    photosNow.className += " " + imageClassname[1];
    photosNow.src = "img/outsideID2.jpg";

  }else{ // other times
    photosNow.className += " " + imageClassname[2];
    photosNow.src ="img/outsideID13.jpg";
  }
}
changePhotos();
