
function openBtn(){
document.getElementById("mysidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeBtn(){
document.getElementById("mysidenav").style.width = "0px";
document.getElementById("main").style.marginLeft = "0px";
document.body.style.backgroundColor = "white";
}



var countDownDate = new Date("march 4, 2024 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"

document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "Happy birthday 🎂 Aisha Ajiya";
  }
}, 1000);


const first = () => {
  document.getElementById("slide").src= "friends1.png";
   }
  setInterval(first, 2000);

 const second = () => {
   document.getElementById("slide").src= "friends2.png";
   }
   setInterval(second, 4000);

 const third = () => {
   document.getElementById('slide').src= 'friends.png';
 }
  setInterval(third, 6000);

const fourth = () => {
  document.getElementById('slide').src= 'friends2.png';
     }
 setInterval(fourth , 8000);

  const sixth = () => {
      document.getElementById('slide').src= 'friends.png';
      }
    setInterval(sixth , 10000);
