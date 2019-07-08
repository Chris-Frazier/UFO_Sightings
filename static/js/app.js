// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

console.log(data);

function buildTable(data){

    tbody.html("");

    data.forEach((UFOSighting) => {
        const row = tbody.append("tr");
        for (key in UFOSighting){
            const cell = row.append("td");
            cell.text(UFOSighting[key]);
        }
    });
}
const filter = d3.select('#filter-btn');

function handleClick(){

    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      }
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);