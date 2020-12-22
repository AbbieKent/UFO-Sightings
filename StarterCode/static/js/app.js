// // from data.js
console.log('hello')
var tableData = data;
// console.log(data);
// // YOUR CODE HERE!
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
// i am using the provided file

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for 

var tbody= d3.select('tbody');
var table = d3.select('table');
function buildTable(data){
    tbody.html('');
    data.forEach(element => {
        let row = tbody.append('tr');
        Object.values(element).forEach((value)=>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
};
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {
    tbody.html('');
    console.log('this is working')
    // // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    var filteredData = tableData.filter(item => {
        return item.datetime === inputValue
        
    });
    // tableData.map(item=>{
    //     console.log(item.datetime);
    //     console.log(item.datetime ===inputValue)
    // })
    console.log(tableData);
    tbody.selectAll('tr').data(filteredData).enter().append("tr").html((item)=>{
        return `<td>${item.datetime}</td>
                <td>${item.city}</td>
                <td>${item.state}</td>
                <td>${item.country}</td>
                <td>${item.shape}</td>
                <td>${item.duration}</td>
                <td>${item.comment}</td>
                `
    
})
};

buildTable(tableData);
    //define function out side of runEnter
    // filteredData.forEach(item=>{
    //     let row= tbody.append('tr');
    //     let datetime=row.append('td');
    //     let city = row.append('td');
    //     let state = row.append('td');
    //     let country = row.append('td');
    //     let shape = row.append('td');
    //     let duration = row.append('td');
    //     let comment = row.append('td');
    //     // console.log(datetime.text(item.datetime));
    //     row.append('tr').text(item.city);
    //     row.append('tr').text(item.state);
    //     row.append('td').text(item.country);
    //     row.append('td').text(item.shape);
    //     row.append('td').text(item.durationMinutes);
    //     row.append('td').text(item.comments);
        // }
    // );
    





// data.forEach(item => {
//     let row = tbody.append('tr');
//     let datetime = row.append('td');
//     let city = row.append('td');
//     let state = row.append('td');
//     let country = row.append('td');
//     let shape = row.append('td');
//     let duration = row.append('td');
//     let comment = row.append('td');
//     datetime.text(item.datetime);
//     city.text(item.city);
//     state.text(item.state);
//     country.text(item.country);
//     shape.text(item.shape);
//     duration.text(item.durationMinutes);
//     comment.text(item.comments);
// })

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.