let countDownDate = new Date("Jul 5, 3019 13:37:00").getTime();

countdown();

let x = setInterval(function() {
  countdown();
}, 1000);

function countdown() {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "You have to wait " + days + "d " + hours + "h "  + minutes + "m " + seconds + "s " + "until release.";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Released";
  }
}
