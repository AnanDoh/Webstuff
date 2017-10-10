$(document).ready(function() {
    $("#start").click(function() {
        location.reload();
    });
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letterid = ["#A", "#B", "#C", "#D", "#E", "#F", "#G", "#H", "#I", "#J", "#K", "#L", "#M", "#N", "#O", "#P", "#Q", "#R", "#S", "#T", "#U", "#V", "#W", "#X", "#Y", "#Z"];
    var words = ["POOP", "MCSCOOP", "BUTTS", "ALPHAKENNYBODY", "REEEEEEEEEEE", "I", "GAS", "BYPASS", "IDUBBZ", "RICEGUM", "HEHEXD"];
    var buttons = [];
    var index = [];
    var lino = [];
    var count = 0;
    var hits = 0;
    var word = words[Math.floor(Math.random() * words.length)];
  
    $("h2").hide();
    $("#7").hide();

    if ($(".creBut").empty) {
        for (var i = 0; i < letter.length; i++) {
            buttons.push('<button id="'+ letter[i] + '">' + letter[i] + '</button>');
        }
    $(".creBut").html(buttons.join(""));
    }
    if ($(".lines").empty) {
        for (var i = 0; i < word.length; i++) {
            lino.push('<button id="letter'+ (i+1) + '">' + "_" + '</button>');
        }
    $(".lines").html(lino.join(""));
    }
    $("" +  letterid.toString()).click(function() {
        var which = $(this).text();
        for (var i = 0; i < word.length; i++) {
            var res = word.charAt(i);
            if (which == res) {
                index.push(i);
                hits++;
            }
        }
        for (var j = 0; j <= index.length; j++) {
            $("#letter" + (index[j] + 1)).text(which);
            //console.log(index[j]);
        }
        if (index.length == 0) {
            count++;
            if (count >= 7){
                console.log("you lost");
                $("#lost").html('You suck at video games <b>' + word + '</b>');
            }
            console.log(count);
            $("#"+ count).show();
        }
        if (hits == word.length){
            $("#lost").html('<b> Winner winner chicken dinner.</b>');
            $("#lost").show();
        }
        $(this).css('visibility', 'hidden')
        index = [];
        $("#count").text(count);
    });

     console.log(word.length);
});
