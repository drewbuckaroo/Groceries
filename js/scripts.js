$(document).ready(function () {
  
  $('#addItem').click(function () {
    event.preventDefault();
    groceries.push($('#groceries').val());
    //alert(groceries);
  

  });
  $('#submitButton').click(function () {
    event.preventDefault();
    groceries.sort();
    //alert(groceries);

    groceries.forEach(function (element) {
      upperGroceries.push(element.toUpperCase());
    });
    $('form').hide();
    //alert(upperGroceries);
    upperGroceries.forEach(function (element) {
      $('#groceryList').append("<li>" + element + '</li>');
    });
  });





});
let groceries = [];
let upperGroceries = [];
