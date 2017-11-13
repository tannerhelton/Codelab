$(document).ready(function () {
    //test
    var cNote = document.getElementById('cAudio');
    $('#c').mousedown(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#c').mouseover(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'q') {
            cNote.currentTime = 0;
            cNote.play();
            $('#c').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'q') {
            $('#c').toggleClass('active');
        }
    });

    var dNote = document.getElementById('dAudio');
    $('#d').mousedown(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    $('#d').mouseover(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'w') {
            dNote.currentTime = 0;
            dNote.play();
            $('#d').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'w') {
            $('#d').toggleClass('active');
        }
    });

    var eNote = document.getElementById('eAudio');
    $('#e').mousedown(function () {
        eNote.currentTime = 0;
        eNote.play();
    });
    $('#e').mouseover(function () {
        eNote.currentTime = 0;
        eNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'e') {
            eNote.currentTime = 0;
            eNote.play();
            $('#e').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'e') {
            $('#e').toggleClass('active');
        }
    });

    var fNote = document.getElementById('fAudio');
    $('#f').mousedown(function () {
        fNote.currentTime = 0;
        fNote.play();
    });
    $('#f').mouseover(function () {
        fNote.currentTime = 0;
        fNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'r') {
            fNote.currentTime = 0;
            fNote.play();
            $('#f').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'r') {
            $('#f').toggleClass('active');
        }
    });

    var gNote = document.getElementById('gAudio');
    $('#g').mousedown(function () {
        gNote.currentTime = 0;
        gNote.play();
    });
    $('#g').mouseover(function () {
        gNote.currentTime = 0;
        gNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 't') {
            gNote.currentTime = 0;
            gNote.play();
            $('#g').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 't') {
            $('#g').toggleClass('active');
        }
    });

    var bNote = document.getElementById('bAudio');
    $('#b').mousedown(function () {
        bNote.currentTime = 0;
        bNote.play();
    });
    $('#b').mouseover(function () {
        bNote.currentTime = 0;
        bNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'u') {
            bNote.currentTime = 0;
            bNote.play();
            $('#b').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'u') {
            $('#b').toggleClass('active');
        }
    });

    var aNote = document.getElementById('aAudio');
    $('#a').mousedown(function () {
        aNote.currentTime = 0;
        aNote.play();
    });
    $('#a').mouseover(function () {
        aNote.currentTime = 0;
        aNote.play();
    });
    $(document).keypress(function (event) {
        if (event.key == 'y') {
            aNote.currentTime = 0;
            aNote.play();
            $('#a').toggleClass('active');
        }
    });
    $(document).keyup(function (event) {
        if (event.key == 'y') {
            $('#a').toggleClass('active');
        }
    });

});
