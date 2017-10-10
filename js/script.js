$(document).ready(function() {
    $("#start").click(function() {
        location.reload();
    });
    var min = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letterid = ["#A", "#B", "#C", "#D", "#E", "#F", "#G", "#H", "#I", "#J", "#K", "#L", "#M", "#N", "#O", "#P", "#Q", "#R", "#S", "#T", "#U", "#V", "#W", "#X", "#Y", "#Z"];
    var words = ["HELLO", "GOODBYE", "DESTINY", "JOLLY", "PIZZAZZ", "BUZZWIG", "ACTING", "ADJURE", "ADJUST", "SEIZURE"]
    var buttons = [];
    var index = [];
    var lino = [];
    var misses = 0;
    var hits = 0;
    var my_div = document.getElementById('my_div');
    var word = words[Math.floor(Math.random() * words.length)];
  
    $("h2").hide();

    if ($(".creBut").empty) {
        for (var i = 0; i < min.length; i++) {
            buttons.push('<button id="'+ min[i] + '">' + min[i] + '</button>');
        }
    $(".creBut").html(buttons.join(""));
    }
    if ($(".lines").empty) {
        for (var i = 0; i < word.length; i++) {
            lino.push('<button id="letter'+ (i+1) + '">' + "_" + '</button>');
        }
    $(".lines").html(lino.join(""));
    }
    

    //when button is pressed. it is that button's text 
    //itterate through the entire work and ccheck for matches
    //push letter to index
    //increment hits
     $("" +  letterid.toString()).click(function() {
        var fired_button = $(this).text();
        for (var i = 0; i < word.length; i++) {
            var res = word.charAt(i);
            if (fired_button == res) {
                index.push(i);
                hits++;
            }
        }
        for (var j = 0; j <= index.length; j++) {
            $("#letter" + (index[j] + 1)).text(fired_button);
            //console.log(index[j]);
        }
        if (index.length == 0) {
            misses++;
            if (misses >= 7){
                console.log("you lost");
                $("#lose_message").html('You lost. The word was <b>' + word + '</b>. Select New Game to play again.');
            }
            console.log(misses);
            var fixer = misses + 1;
            $("#"+ fixer).show();
        }
        if (hits == word.length){
            $("#lose_message").html('<b> You WON!. Select New Game to play again. </b>');
            $("#lose_message").show();
        }
        $(this).css('visibility', 'hidden')
        index = [];
        $("#misscount").text(misses);
    });

     console.log(word.length);
});