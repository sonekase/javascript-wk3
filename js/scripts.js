$(document).ready(function(){

  $("button#btn").click(function(){
    $(".flavors").fadeToggle();
  });
  
  var flavors = ["vanilla", "chocolate", "cookie-dough", "strawberry", "coffee"];
  flavors.forEach(function(flavor){
    $("#fav-flavors").prepend("<li>" + flavor +"</li>");
  });












});
