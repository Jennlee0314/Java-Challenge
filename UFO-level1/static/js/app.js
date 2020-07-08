// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console.log the data from data.js
//console.log(data);

// // // Step 1: Loop Through `data` and console.log each UFO report object
// data.forEach(function(UFOReport) {
// console.log(UFOReport);
// });

// // // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // // Don't worry about adding cells or text yet, 
// // // just try appending the `tr` elements.
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
//  var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(UFOReport) {
// console.log(UFOReport);
// var row = tbody.append("tr");

//   Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(UFOReport) {
//   console.log(UFOReport);
//   var row = tbody.append("tr");

//   Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)

function buildtable(data){
  tbody.html("")

data.forEach(function(UFOReport) {
  //console.log(UFOReport);
  var row = tbody.append("tr");
  
  Object.values(UFOReport).forEach(function(value) {
    //console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

}
buildtable(tableData);

function filterData(){
  var Date = d3.select('#datetime').property("value");
 // console.log(Date);

  var filteredData = tableData

  fitleredData = filteredData.filter(function(row){
    console.log(row);
    row.datetime = Date
 });
  //console.log(filteredData);

  buildtable(filteredData);
}

d3.selectAll('#filter-btn').on('click', filterData);

// // BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
