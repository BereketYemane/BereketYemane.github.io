$(document).ready(function () {
    // variable to keep track of the mouse movement
    var gameStarted = false;
    var boundary = $(".boundary");
    var status = $("#status");
    // game is started
    $("#start").click(function () {
        status.text("Game started ...").css("color", "blue")
        gameStarted = true;
        // remove the lose class and start a new game
        if (boundary.hasClass("youlose")) {
            boundary.removeClass("youlose")
        }
        // if mouse touchs the boundary while the game is on ..... then the player loses
        boundary.mouseover(function () {
            if (gameStarted == true) {
                lose();
            }
        });
        //if the cursure leaves the maze division while the game is on, then the player loses
        $("#maze").mouseleave(function () {
            if (gameStarted == true) {
                lose();
            }
        });
    });
    $("#end").mouseover(function () {
        //mouse reaches the end while the game status is still on ... the player wins
        if (gameStarted == true && boundary.hasClass("youlose")) {
            lose();
        }
        else if (gameStarted == true) {
            win();
        }
    });
    function win() {
        gameStarted = false;
        status.text("You won! :]").css("color", "green");
    }
    function lose() {
        gameStarted = false;
        boundary.addClass("youlose");
        status.text("You Lost!").css("color", "red");
    }
});