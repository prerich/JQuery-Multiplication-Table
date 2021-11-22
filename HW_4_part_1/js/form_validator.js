/* 
    name: Jennifer Robles
    email: Jennifer_Robles@student.uml.edi
    date: 11-17-2021
    purpose: my own custumization of JQuery valiadtions and messages
    add features to compare min and max and check if its an integer
        
*/

/*  https://www.w3schools.com/jquERy/jquery_syntax.asp used to learn syntax*/


$(document).ready(function(){
    $("#form").validate({
        rules: {
            minCol:{
                required: true,
                integer: true,
                min: -50,
                max: 50,
            },
            maxCol:{
                required: true,
                integer: true,
                min: -50,
                max: 50,
                greaterThan: ('#minCol'),
            },
            minRow:{
                required: true,
                integer: true,
                min: -50,
                max: 50,
            },
            maxRow:{
                required: true,
                integer: true,
                min: -50,
                max: 50,
                greaterThan: ('#minRow'),
            },

        },//end of rules

        messages: {
            minCol:{
                required: "Please enter an Integer"
            },
            maxCol:{
                required: "Please enter an Integer",
                greaterThan: "Maximum Column is less than Minmum Column",
            },
            minRow:{
                required: "Please enter an Integer"
            },
            maxRow:{
                required: "Please enter an Integer",
                greaterThan: "Maximum Row is less than Minimum Row",
            }
        }, //end of messages

    });

  });


  //checks for integer, character and floats are not allowed
  //got expressuin from regex https://www.regextester.com/1923 
  jQuery.validator.addMethod("integer", function(value, element){
    return this.optional(element) || /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/.test( value );
  }, "No characters or decimals allowed. Only Integers allowed");



  //checks if Max values are greater than min
  //comapring two fields used ref
  // https://stackoverflow.com/questions/32587177/jquery-validate-compare-two-fields/51589538
  jQuery.validator.addMethod("greaterThan", function(value, element, param){
    return parseInt(value) >= parseInt($(param).val());

  }, "Max is less than min");
