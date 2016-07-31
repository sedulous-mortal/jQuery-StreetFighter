$(document).ready(function () {

    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function () {
                        $('.hadouken').hide();
                        $('.hadouken').css('left', '520px');
                    }
                );
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

    var cool = false;

    function playCool() {
        cool = !cool;
        if (cool) { //If cool is true
            /*
            $('#cool-sound')[0].volume = 0.5;
             $('#cool-sound')[0].load();
             */
            $('#cool-sound')[0].play();
        }
    }

    /*code so I can see if x was pushed*/
    $(document)
        .keydown(function (event) {
            if (event.keyCode == 88) {
                console.log(event);
                $('.ryu-ready').hide();
                $('.ryu-still').hide();
                $('.ryu-cool').show();
                playCool();
            }

        })
        .keyup(function (event) {
            if (event.keyCode == 88) {
                $('.ryu-cool').hide();
                $('.ryu-ready').show();
                $('#cool-sound')[0].pause(); //stop playing
                $('#cool-sound')[0].load(); // Reset time
            }
        });
});
