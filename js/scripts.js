$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const furby = $("#furby").val();
    const name = $("input#name").val();
    const street = $("input#street").val();
    const city = $("input#city").val();
    const state = $("input#state").val();
    const zip = $("input#zip").val();
    const ship = $("#ship").val();

    $("p.furby").text(furby);
    $("p.name").text(name);
    $("span#street").text(street);
    $("span#city").text(city);
    $("span#state").text(state);
    $("span#zip").text(zip);
    $(".ship").text(ship);

    $(".receipt").show();
  });
});