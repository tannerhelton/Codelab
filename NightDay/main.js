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
            $('[id^=moonspot').removeClass('visible');
        } else {
            $('[id^=moonspot').addClass('visible');
        }

        if ($('#planet1').hasClass('light')) {
            $('#planet1').removeClass('light').addClass('dark');
        } else {
            $('#planet1').removeClass('dark').addClass('light');
        }

        if ($('#planet2').hasClass('light2')) {
            $('#planet2').removeClass('light2').addClass('dark2');
        } else {
            $('#planet2').removeClass('dark2').addClass('light2');
        }
    });
});
