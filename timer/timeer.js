var deadline = new Date("jan 01, 2021 00:00:00").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
var clock=document.getElementById('clocktime');
var dayspan=clock.querySelector('#days');
var hoursspan=clock.querySelector('#hours');
var minutespan=clock.querySelector('#minute');
var secondspan=clock.querySelector('#second');




dayspan.innerHTML=days  ; 
hoursspan.innerHTML=hours; 
minutespan.innerHTML= minutes;  
secondspan.innerHTML =seconds;
if (t < 0) { 
        clearInterval(x); 
         
        dayspan.innerHTML=0 ; 
		hoursspan.innerHTML=0; 
		minutespan.innerHTML= 0;  
		secondspan.innerHTML =0;
		} 
}, 1000);