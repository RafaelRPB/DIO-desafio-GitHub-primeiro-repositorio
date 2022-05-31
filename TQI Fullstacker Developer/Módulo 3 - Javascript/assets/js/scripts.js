var currentnumberwrapper = document.getElementById('currentnumber');
var currentnumber =0;

function increment(){
    if (currentnumber==10) {
        
    } else {
        currentnumber= currentnumber+1;
        currentnumberwrapper.innerHTML =currentnumber;       
    }

}
function decrement(){
    if (currentnumber == 0) {
    //do nothing  
    } else {
        currentnumber= currentnumber-1;
        currentnumberwrapper.innerHTML =currentnumber;        
    }

}