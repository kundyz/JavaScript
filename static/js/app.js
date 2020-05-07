// From data.js
var tableData = data;

var datum = {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
};

tableData.splice(2, 0, datum);

function populateTable(dataToPopulate) {
    var tBody = d3.select("#ufo-table").select("tbody");
    tBody.html("");

    for (i = 0; i < dataToPopulate.length; i++) {
        var row = tBody.append("tr");
        var values = dataToPopulate[i];
        var cell = row.append("td");
        cell.text(values.datetime);
        cell = row.append("td");
        cell.text(values.city);
        cell = row.append("td");
        cell.text(values.state);
        cell = row.append("td");
        cell.text(values.country);
        cell = row.append("td");
        cell.text(values.shape);
        cell = row.append("td");
        cell.text(values.durationMinutes);
        cell = row.append("td");
        cell.text(values.comments);
    }
};

populateTable(tableData);

var btn = d3.select("#filter-btn");
btn.on("click", function() {
    d3.event.preventDefault();
    var datetime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var filteredData = tableData;
    if (datetime) {
        filteredData = filteredData.filter(row => row.datetime === datetime);
    }
    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    }
    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    }
    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    }
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    }
    populateTable(filteredData);
});
