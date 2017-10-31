function showHide(){
    
          
    var div_one = document.getElementById('bliMed');
    var current = new Date();
    var currentMonth = current.getUTCMonth() + 1; //months from 1-12
    
    var opptakStart1  = 8;
    var opptakSlutt1 = 9;
    var opptakStart2  = 1;
    var opptakSlutt2 = 2;

    if( currentMonth === opptakStart1||currentMonth === opptakStart2||currentMonth === opptakSlutt1||currentMonth === opptakSlutt2){
        

        div_one.style.display = "block";

        } 
}
