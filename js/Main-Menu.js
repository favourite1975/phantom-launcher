alert("please this might not be very responsive on your device please try veiwing it on a smaller device");
window.onload = () => {
    let preload = setInterval(function(){
        let preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }, 3000);
    var currentTime = new Date();
    var Time = document.getElementById('time');
    Time.innerHTML = currentTime.toLocaleTimeString();
}


