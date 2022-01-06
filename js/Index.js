 var currentTime = new Date();
     var Time = document.getElementById('time');
      Time.innerHTML = currentTime.toLocaleTimeString();
          
          
    var today = new Date();
    var hour = today.getHours();
    var min =  today.getMinutes();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = min;
document.getElementById('date').innerHTML = date;
function err() {
  alert("please try again");
}