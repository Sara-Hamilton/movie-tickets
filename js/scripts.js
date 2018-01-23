// business logic
var inputtedMovieName = ("");
var inputtedMovieTime = ("");
var inputtedMovieType = ("");
var inputtedQuantity = 0;
var price = 0;

function Ticket(name, time, type, cost, firstRelease) {
  this.name = name;
  this.time = time;
  this.type = type;
  this.cost = cost;
  this.firstRelease = false;
}

price = function(time, type, quantity) {
  var timePrice = 0;
  var typePriceAdjustment = 0;
  if (time === "Matinee (before your teenagers wake up)") {
    timePrice = 9;
  } else {
    timePrice = 12;
  }
  if (type === "Adult") {
    typePriceAdjustment = 1;
  } else {
    typePriceAdjustment = 0.6;
  }
  return parseFloat((timePrice * typePriceAdjustment * quantity).toFixed(2));
}

// user interface logic
$(document).ready(function(){
  $("form#new-movie").submit(function(event){
    event.preventDefault();

    inputtedMovieName = $("select#new-movie-name").val();
    inputtedMovieTime = $("select#new-time").val();
    inputtedMovieType = $("select#new-type").val();
    inputtedQuantity = parseInt($("input#new-quantity").val());
    price = price(inputtedMovieTime, inputtedMovieType, inputtedQuantity).toFixed(2);

    newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedMovieType, price);

    $(".name").text(newTicket.name);
    $(".time").text(newTicket.time);
    $(".type").text(newTicket.type);
    $(".quantity").text(inputtedQuantity);
    $(".price").text("$" + price);

    $(".ticket-price").show();
  });
});
