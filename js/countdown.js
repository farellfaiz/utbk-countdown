const year = new Date().getFullYear();

const secondMarch = new Date(year, 3, 2).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    let diff;
    diff = secondMarch - today;





    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display
    document.getElementById("timer").innerHTML =
        "<div class=\"days\"> \
  <div class=\"numbers\">" + "G" + "</div>good</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + "L" + "</div>luck</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + "H" + "</div>have</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + "F" + "</div>fun</div> \
</div>";

}, 1000);

// REDIRECT BASED ON DATE
// var date = new Date().toISOString().split('T')[0];
// if (date == "2021-03-01") {
//    window.location.href = "https://google.com";
// }