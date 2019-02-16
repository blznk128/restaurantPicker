let choices = [];

$('#entered').on('click', function() {
    event.preventDefault();
    let enter = $('#place').val().trim();
    choices.push(enter);
    $(".selection").empty()
    $("ul").append("<li>" +  enter  + "</ul>")
});

$("#picker").on("click", function() {
    var place = choices[Math.floor(Math.random()*choices.length)];
    $("#result").text(place)
    console.log(place)
})