
    /* 
        name: Jennifer Robles
        email: Jennifer_Robles@student.uml.edi
        date: 11-17-2021
        purpose: adding tabs feature to the multipliaction table, so user
            can save and maintain multiple tables
        
    */    


//labels the title of the tab for each table created
//using its parameters
function labelTab(){
    return 'Column ' + getMinCol() + ' to ' + getMaxCol() +
    ' Row ' + getMinRow() + ' to ' + getMaxRow();
}

//creates an id for the div to match the link tab
function idgen(){
    return 'Col-' + getMinCol() +'-' + getMaxCol() + '-Row-'+
    getMinRow() + '-' + getMaxRow();

}

$(document).ready(function(){
    //will show at the start because its empty 
   $("#containerTabs").tabs().hide()

   //no tabs available in the start so no need for remove tabs button
   $(".removeTabsButton").hide();

   //whenever a tab is selected it will display and scroll down the page
   //into view
   // https://www.w3schools.com/jsref/met_element_scrollintoview.asp
   $("#containerTabs").click("selectedTab", function(event,  ui){
       var tab = $("#containerTabs").tabs('option', 'active');
       document.getElementById("containerTabs").scrollIntoView(true);
   })

});

//user decided whether to save tab or not
//when save tab button is clicked this function will be called
//to show a new tab
function saveTab(){
    //first it must validate if values are
    //in correct format before saving
    var validator = $("#form").validate();
    if(!validator.form()){ return; } 

    //if no tabs where avainle before will
    //display tabs now
    $("#containerTabs").tabs().show();
    $(".removeTabsButton").show();


    //tabs are a link and list item in an ul list
    //for other tabs
   var li = document.createElement("li");
   var a = document.createElement('a');
   a.innerHTML = labelTab(); //names the tab
   a.href = '#' + idgen();//important to match up to div content

   //a chechbox as an option(s) to delete tabs later on
   var checkbox  = '<input type="checkbox" class="checkbox">';

   li.appendChild(a); // the a eleemnt is a child of a list
   li.innerHTML += checkbox; // and checkbox is a sibling of a element
   document.getElementById("listTabs").appendChild(li);


   //creating the tab content 
   var div = document.createElement("div");
   div.id = idgen();
   div.class = "cloneTable"; //styling purposes created class
    
   //deep copying the contents of the display table to a tab content 
   var table = document.getElementById("containerTable");
   var cln = table.cloneNode(true);
   cln.id=""; //removing id of orig table for new
   div.appendChild(cln);
   document.getElementById("containerTabs").appendChild(div);

   $("#containerTabs").tabs("refresh"); //refresh tab to add new tab

};


// https://www.c-sharpcorner.com/article/dynamic-jquery-tabs-add-update-delete-and-sorting/
//removing one tab or multiple tabs 
function removeTabs(){
    //an array of items that were checked
   var checked = document.querySelectorAll('.checkbox:checked');
   length = checked.length;

   for(var i = 0; i < length; i++){
        //first remove div of the content by looking for id
        //by traversing throgh dom from checkedbox
        var href= checked[i].previousElementSibling.href;

        //removes filepath and looks for id from my genId()
        index= String(href).indexOf("#");
        var id = String(href).slice(index+1, String(href).length);

        //div where table lies and will be remove
        var elDiv = document.getElementById(String(id));
        elDiv.remove();


        //removes tab
        var item = checked[i].parentNode;
        $( "#containerTabs" ).find(checked[i].parentNode).remove();
   }

   //if there are no tabs hide the button and tab area
   var tabs = document.getElementsByTagName('li');
   if(tabs.length === 0){
    $(".removeTabsButton").hide();
    $("#containerTabs").tabs().hide();
   }


   //refreshes table to display removed tab
   $("#containerTabs").tabs("refresh");
   


}