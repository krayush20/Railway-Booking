//interChange input field
var from = document.getElementById("from");
var to = document.getElementById("to");
var exchange = "";
var btn = document.getElementById("imgBtn");

function interChange(){
    exchange = from.value
    from.value = to.value;
    to.value = exchange;
}

btn.addEventListener('click',interChange);

//date value

let today = new Date();
let date = today.getDate();
let month = (today.getMonth() + 1);
if (month < 10) 
    month = "0" + month;
if (date < 10) 
    date = "0" + date;
let year = today.getFullYear();

let fullDate = year+"-"+month+"-"+date;
console.log(fullDate);
document.getElementById("dateType").defaultValue = fullDate;
document.getElementById("dateType").min = fullDate;
