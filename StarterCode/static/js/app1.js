var tableData = data;
// console.log(tableData)
// set variable for table body to put the information in the <tbody>section of the HTML</tbody>
var tbody = d3.select("tbody");


//load all Data in dataset for default HTML view

function addTable(td){
    tbody.html("");
    td.forEach(ufoSightings => {
    var row = tbody.append("tr");

    Object.values(ufoSightings).forEach((value)=> {
        var cell=row.append("td");
        cell.text(value); });
});
}

addTable(tableData);

// create variable for the user inputed date
var filteredData=data;
var button = d3.select('#filter-btn');

//create a function for filtering the data
button.on("click",function(){
    var inputDate = d3.select("#datetime").property("value");
    //var city=d3.select("#city").property("value");
    if (inputDate!=""){
        filterData=tableData.filter(row=>row.datetime===inputDate);

        Object.values(filterData).forEach((value)=> {
            var cell=row.append('td');
            cell.text(value);
        });
    }
    //YOU Can continue your if statements here
    //addTable(filteredData);
});