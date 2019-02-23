let choices = [];

$('#entered').on('click', function() {
    let enter = $('#place').val().trim();
    choices.push(enter);
    $(".selection").empty()
    $("ul").append("<li>" +  enter  + "</ul>");
    $("#place").val('')
});

$("#picker").on("click", function() {
    var place = choices[Math.floor(Math.random()*choices.length)];
    $("#result").text(place)
    console.log(place)
})