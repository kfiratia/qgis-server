var map = L.map('map').setView([32.938397, 35.34147], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);





// graves.forEach(element => {

//     var marker = L.marker([element["latitude"], element["longitude"]]).addTo(map);
//     marker.bindPopup(`<h2 style="text-align: right;">${element["name"]}</h2>
//     <br>
//     <h3 style="text-align: right;">${element["addres"]}<h3>
//     <h4 style="text-align: right;">${element["description"]}<h4>
//     <a href="https://www.waze.com/ul?ll=${element["latitude"]}%2C${element["longitude"]}&navigate=yes&zoom=16"  style="text-align: right;">נווט</a>`);
// });

var graveIcon = L.icon({
    iconUrl: 'https://icon-library.com/images/history-icon/history-icon-7.jpg',
    iconSize:     [30, 30], // size of the icon
});


const api_url = "https://doron-qgis.herokuapp.com/api"
// Adding the entire table to the body tag

async function getapi(url) {


    // Storing response
const response = await fetch(url);
// Storing data in form of JSON
var graves = await response.json();
console.log(graves);
graves.forEach(element => {
    var marker = L.marker([element["latitude"], element["longitude"]], {icon: graveIcon}).addTo(map);
    marker.bindPopup(`<h1 style="text-align: right;">${element["name"]}</h1>
    <h2 style="text-align: right;">${element["city"]}<h2>
    <h3 style="text-align: right;">${element["district"]}<h3>
    <h4 style="text-align: right;">${element["description"]}<h4>
    <a href="https://www.waze.com/ul?ll=${element["latitude"]}%2C${element["longitude"]}&navigate=yes&zoom=16"  style="text-align: right;">נווט</a>`);
});





}
// Calling that async function
getapi(api_url);


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


