"use strict";

$(document).ready(function () {
    let timerId;

    function growthInterval() {
        timerId = setInterval(growCircle, parseInt($("#interval").val()));
    }

    function growCircle() {
        let size = parseInt($(".circle").height()) + parseInt($("#grow").val());
        $(".circle").height(size);
        $(".circle").width(size);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function appendCircles() {
        let height = $('#circles').height();
        let width = $('#circles').width();
        var circleWidth = parseInt($("#width").val());
        for (let i = 0; i < parseInt($("#numOfCircles").val()); i++) {
            $("#circles").append($("<div>", {
                "class": "circle",
                "css": {
                    "background-color": getRandomColor(),
                    "width": circleWidth,
                    "height":circleWidth,
                    "top": getRandomInt(height - circleWidth),
                    "right": getRandomInt(width/2 - circleWidth)
                },
                "click": function () {
                    this.remove();
                }
                
            }));
        }
    }

    $("#start").submit(function (event) {
        event.preventDefault();
        appendCircles();
        growthInterval();
    });
});
