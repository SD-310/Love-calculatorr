$(document).ready(function () {
    function flashH1(times) {
        if (times > 0) {
            $("h1")
                .fadeOut(600)
                .fadeIn(500, function () {
                    flashH1(times - 1);
                });
        }
    }
    flashH1(3); 

    var yourName = prompt("Enter your name.")
var loversName = prompt ("Enter your Lover's/Crushes name")


$(".btn").click(function () {
    var loveScore = Math.random()
var workings = loveScore*100
var finishUp = Math.round(workings)

if (finishUp > 70) {
    alert ("The chances of you ending up with" + loversName + " is " + finishUp +  "%, high chance of ending up with them")
}
    else {
alert("The chances of you ending up with " + loversName  + " is " + finishUp + "%, good luck in your love journey")
}
})
