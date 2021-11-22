
    /* 
        name: Jennifer Robles
        email: Jennifer_Robles@student.uml.edi
        date: 11-17-2021
        purpose: adding slider feauture from jquery to each input value
         the slider is binded to its corresponding form input
         also when slider is changed for any of its value will generate a
         a new table
        
    */    


/* https://www.tutorialspoint.com/jqueryui/jqueryui_slider.html */


//will display sliders when pages finish loading
$(document).ready(function() {
///start of minCOl slider
   //init minimum column value to zero
   $( "#minCol" ).val(0);

   //if user leave the input box of minCol 
   //slider will update to 
   //value from the form input
   $('#minCol').focusout(function(){
      //before binding to slider must
      //be in correct form first
      var validator = $("#form").validate();
      if(!validator.form()){ return; } 

      $("#minCol_slider").slider("value", getMinCol());
   });

   $( "#minCol_slider" ).slider({
      value: 0,
      animate:"fast",
      orientation: "horizontal",
      min: -50,
      max: 50,
      slide: function( event, ui ) {
         //binding slider to form value of mincol
      $( "#minCol" ).val( ui.value );
      },
      change: function(event, ui){
         //everytime a value is changed
         //table will generate
         genTable();
      },

   }).slider("pips").slider("float");; //display lines for slider


    //start of maxcol slide
    $( "#maxCol" ).val(0); //int value for form input

   //if user leave the input box slider will update to 
   //value from the form input
    $('#maxCol').focusout(function(){
      //validating inputs first before binding
      var validator = $("#form").validate();
      if(!validator.form()){ return; } 

      //binding form value to slider
       $("#maxCol_slider").slider("value", getMaxCol());
    });

    //styling slider
   $( "#maxCol_slider" ).slider({
      value: 0,
      animate:"fast",
      orientation: "horizontal",
      min: -50,
      max: 50,
      slide: function( event, ui ) {
         //binding slider to form value of maximum column
         $( "#maxCol" ).val( ui.value );
      },
      change: function(event, ui){
      //generate table if maxcol is changed
      genTable();
   },

   }).slider("pips").slider("float"); //display lines for slider of maxCol



   //start of minrow slider
   $( "#minRow" ).val(0);

   $('#minRow').focusout(function(){
      //check if values are correct
      var validator = $("#form").validate();
      if(!validator.form()){ return; } 
      
      //bind form value of minrow to minrow slider
      $("#minRow_slider").slider("value", getMinRow());
   });

   $( "#minRow_slider" ).slider({
      value: 0,
      animate:"fast",
      orientation: "horizontal",
      min: -50,
      max: 50,
      slide: function( event, ui ) {
         //binds slider to form value
         $( "#minRow" ).val( ui.value );
      },
      change: function(event, ui){
         //generates table when minRow value is changed
         genTable();
      },

   }).slider("pips").slider("float");


   //start of maxROw slider   
   $( "#maxRow" ).val(0); //init value of maxRow

   $('#maxRow').focusout(function(){
      //validate value before bidnding form
      //value to slider
      var validator = $("#form").validate();
      if(!validator.form()){ return; } 

      //binding to slider
      $("#maxRow_slider").slider("value", getMaxRow());
   });

   $( "#maxRow_slider" ).slider({
      value: 0,
      animate:"fast",
      orientation: "horizontal",
      min: -50,
      max: 50,
      slide: function( event, ui ) {
         //binds slider to form value of maxRow
         $( "#maxRow" ).val( ui.value );
      },
      change: function(event, ui){
         //generates table when maxRow is value is changed
         genTable();
      },

   }).slider("pips").slider("float");




 });

