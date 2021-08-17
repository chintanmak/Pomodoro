console.log('js loaded');

var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;

    countdownElement.innerHTML = initialCountdownVal;
    var backimgpath = initialCountdownVal !== 0 ? 'assests/background1.jpg' : 'assests/background2.jpg'

    bgImageElement.src = backimgpath;
}, 1000);