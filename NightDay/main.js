$(document).ready(function () {
    $('#orb').click(function () {
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        } else {
            $(this).removeClass('moon').addClass('sun');
        }

        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }

        if ($('[id^=moonspot').hasClass('visible')) {
            $('[id^=moonspot').removeClass('visible').addClass('notvisible');
        } else {
            $('[id^=moonspot').addClass('visible').removeClass('notvisible');
        }

        if ($('#planet1').hasClass('light')) {
            $('#planet1').removeClass('light').addClass('dark');
            $('#planet1').removeClass('notvisible').addClass('visible');
        } else {
            $('#planet1').removeClass('visible').addClass('notvisible');
            $('#planet1').removeClass('dark').addClass('light');
        }

        if ($('#planet4').hasClass('light')) {
            $('#planet4').removeClass('light').addClass('dark');
            $('#planet4').removeClass('visible').addClass('notvisible');
        } else {
            $('#planet4').removeClass('notvisible').addClass('visible');
            $('#planet4').removeClass('dark').addClass('light');
        }

        if ($('#planet1').hasClass('right')) {
            $('#planet1').removeClass('right').addClass('left');
        } else {
            $('#planet1').removeClass('left').addClass('right');
        }

        if ($('#planet2').hasClass('light2')) {
            $('#planet2').removeClass('light2').addClass('dark2');
            $('#planet2').removeClass('visible').addClass('notvisible');
        } else {
            $('#planet2').removeClass('notvisible').addClass('visible');
            $('#planet2').removeClass('dark2').addClass('light2');
        }

        if ($('#planet5').hasClass('light2')) {
            $('#planet5').removeClass('light2').addClass('dark2');
            $('#planet5').removeClass('notvisible').addClass('visible');
        } else {
            $('#planet5').removeClass('visible').addClass('notvisible');
            $('#planet5').removeClass('dark2').addClass('light2');
        }

        if ($('#planet3').hasClass('light3')) {
            $('#planet3').removeClass('light3').addClass('dark3');
            $('#planet3').removeClass('visible').addClass('notvisible');
        } else {
            $('#planet3').removeClass('notvisible').addClass('visible');
            $('#planet3').removeClass('dark3').addClass('light3');
        }

        if ($('#planet6').hasClass('light3')) {
            $('#planet6').removeClass('light3').addClass('dark3');
            $('#planet6').removeClass('notvisible').addClass('visible');
        } else {
            $('#planet6').removeClass('visible').addClass('notvisible');
            $('#planet6').removeClass('dark3').addClass('light3');
        }
    });
});
