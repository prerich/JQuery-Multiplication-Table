    /* 
        name: Jennifer Robles
        email: Jennifer_Robles@student.uml.edi
        date: 11-17-2021
        purpose: Will dynamically create a table from the form 
        in the html file. Also using JQuery validator plug in will output
            when errors are encountered. Remove my own validation methods
            so this file is a lot shorter than before. 
        
    */    
    
    /*  https://stackoverflow.com/questions/3547035/getting-html-form-values
        on retrieving form values  */

    /* https://www.w3schools.com/jsref/dom_obj_document.asp reference
        for DOM functions*/
    /* https://stackoverflow.com/questions/8302166/dynamic-creation-of-table-with-dom
    referenced to help create tables.*/

    /* https://www.w3schools.com/jsref/jsref_parseint.asp for parseInt*/


// Gettter function to get miniumun column value from user
function getMinCol(){
    var minCol = parseInt(document.getElementById("minCol").value);
    //console.log('minCol is ' + minCol);
    return minCol;
}

// Gettter function to return max column value from user
function getMaxCol(){
    var maxCol = parseInt(document.getElementById("maxCol").value);
   // console.log('maxCol is ' + maxCol);
    return maxCol;
}

// Gettter function to return min row value from user
function getMinRow(){
    var minRow = parseInt(document.getElementById("minRow").value);
    //console.log('minRow is ' + minRow);
    return minRow;
}


// Gettter function to return max row value from user
function getMaxRow(){
    var maxRow = parseInt(document.getElementById("maxRow").value);
   // console.log('maxRow is ' + maxRow);
    return maxRow;
}




function genTable(){
    //clear table from before if any

    document.getElementById("containerTable").innerHTML = "";

    //will not create table when inputs are not valid
    /* https://jqueryvalidation.org/Validator.form/ */ 	
    var validator = $("#form").validate();
    if(!validator.form()){ return; } 

    //getting values from form
    var minCol = getMinCol();
    var maxCol = getMaxCol();
    var minRow = getMinRow();
    var maxRow = getMaxRow();


    //determines the size of the loops
    //the range of each row and col;
    var lengthCol = maxCol - minCol;
    var lengthR = maxRow - minRow;

    //creating the table element
    var table = document.createElement("table");

 
    //creates the top row which is minCol to maxCol inclusivly
    var theader = document.createElement('tr');
    var emptycell = document.createElement('th');
    emptycell.innerHTML = 'X';//placeholder
    theader.appendChild(emptycell);
  
    for(var col = minCol, i = 0; i <=lengthCol; col++, i++){ 
        var tempth = document.createElement("th");
        tempth.innerHTML = col;
        theader.appendChild(tempth);
    }
    table.appendChild(theader);
    //end of top row header of first row


    /* https://stackoverflow.com/questions/8302166/dynamic-creation-of-table-with-dom
    referenced to help create tables.*/
    //nested loop will iterate rows first then go by columns
    for(var i = 0, row = minRow; i <= lengthR; i++, row++){
        //creates a row per row iteration 
        //temp row variable
        var tr = document.createElement('tr');

        //its the headers for minRow-MaxROw
        var tempth = document.createElement("th");
        tempth.innerHTML = row;

        //the headers area child of the current row
        tr.appendChild(tempth);


        //inner loop for each column inside the current row
        for(var col = minCol, j = 0; j <= lengthCol; j++, col++){
            //temp var for cell data
            var temptd = document.createElement('td');
            temptd.innerHTML = col * row;
            //cell data is calc and places inside current row
            tr.appendChild(temptd);
        }
        
        //each row is a child of table
        table.appendChild(tr);

    }
    

    //table placed in container
    document.getElementById("containerTable").appendChild(table);

}
