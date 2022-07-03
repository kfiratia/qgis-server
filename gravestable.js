
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('table').appendChild(table);

async function getapi() {
    
    // Storing response
    const response = await fetch("https://doron-qgis.herokuapp.com/api");
    // Storing data in form of JSON
    var graves = await response.json();
    
    
    
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = `<div style="text-align: right;">שם הקבר<div>`;
    heading_1.style = "width: 10%;"
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = `<div style="text-align: right;">עיר<div>`;
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = `<div style="text-align: right;">מחוז<div>`;
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = `<div style="text-align: right;">דרכי הגעה<div>`;
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = `<div style="text-align: right;">ניווט<div>`;
    
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_1);
    thead.appendChild(row_1);
    
    
    // Creating and adding data to second row of the table
    graves.forEach(element => {
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = `<div style="text-align: right;">${element["name"]}<div>`;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = `<div style="text-align: right;">${element["city"]}<div>`;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = `<div style="text-align: right;">${element["district"]}<div>`;
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = `<div style="text-align: right;">${element["direction"]}<div>`;
        let row_data_5 = document.createElement('td');
        row_data_5.innerHTML = `<a href="https://www.waze.com/ul?ll=${element["latitude"]}%2C${element["longitude"]}&navigate=yes&zoom=16"  style="text-align: right;">נווט</a>`;
    
        row.appendChild(row_data_5);
        row.appendChild(row_data_4);
        row.appendChild(row_data_3);
        row.appendChild(row_data_2);
        row.appendChild(row_data_1);
        tbody.appendChild(row);
    
    });
    
   
}
// Calling that async function
getapi();





