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

    flashH1(2);
    $("h2").hide().fadeIn(1000);
    $("div").css({ position: "relative", left: "-100%" }).animate({ left: "0%" }, 1000);
    $(".btn").hide().fadeIn(1000);

    $(".btn").click(function (event) {
        event.preventDefault();
        $(this).fadeOut(600).fadeIn(5000);


        var loveScore = Math.random();
        var finishUp = Math.round(loveScore * 100);
        var loversName = $("#name2").val();

        if (!loversName) {
            $("#result").html(`<span style="color: red;">Please enter a name!</span>`);
          

            return;
        }

        if (finishUp > 70) {
            $("#result").html(`💘 The chances of you ending up with <strong>${loversName}</strong> is <span style="color: hotpink;">${finishUp}%</span> — high chance of ending up with them!`);
        } else {
            $("#result").html(`😅 The chances of you ending up with <strong>${loversName}</strong> is <span style="color: gray;">${finishUp}%</span> — good luck in your love journey!`);
        }
    });
});
