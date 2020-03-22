// from data.js
var tableData = data;

// console.log(tableData)

// set variable for table body to put the information in the <tbody>section of the HTML</tbody>
var tbody = d3.select("tbody");
var button = d3.select('#filter-btn');
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


//load all Data in dataset for default HTML view
var AllData = (tableData) => {
    tableData.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

AllData(tableData);

// create variable for the user inputed date
var inputDate = d3.select("#datetime");

//create a function for filtering the data
function filterData() {
    var filteredData= tableData.filter(tableData => tableData.datetime === inputDate);
    //output filteredData//??I know this is wrong but I dont know what right is yet
    return filteredData
    console.log(filteredData)
    
};
filterData(filteredData)



//create function to be triggered when the submit button is clicked
button.on("click", filterData);

//create an input field function for when the date is entered
inputDate.on('change', filterData);

 

