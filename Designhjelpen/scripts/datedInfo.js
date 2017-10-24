window.setInterval(function(){

  var current = new Date();
  var expiry  = new Date("October 29, 2012 12:00:00")
  var expiry2 = new Date("October 30, 2012 12:00:00")

  if(current.getTime()>expiry.getTime()){
    $('#one').hide();
    $('#two').show();
  }
  else if(current.getTime()>expiry2.getTime()){
       $('#two').hide();
       $('#three').show();
   }

}, 3000);

$('#one').show(); 