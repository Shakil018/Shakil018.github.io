
var monthNameArray= ["January","February","March","April","May","June","July","August","September","October","November","December"];


function refreshTime() {
    const timeDisplay = document.getElementById("timeSpan");
    // const dateString = new Date().toLocaleString();
    const monthString = monthNameArray[new Date().getMonth()];
    const dateString = new Date().getDate();
    const yearString = new Date().getFullYear();

    // const formattedString = dateString.replace(", ", " - ");

    var datetime = new Date().toLocaleString().split(", ")[1];

    var date = datetime + " " + monthString + " " + dateString + ", " + yearString;


    timeDisplay.textContent = date;
  }
    setInterval(refreshTime, 1000);



refreshTime();

// var dateString = new Date().toLocaleString();
// const formattedString = dateString.replace(", ", " - ");

// console.log(dateString);
// document.getElementById("timeSpan").textContent = formattedString; 
