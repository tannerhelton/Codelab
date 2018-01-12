var mainUser = '';
var users = [];
//Sets the ip of the server
var socketServer = 'http://10.10.101.132:3000/';
var socket = io.connect(socketServer);
var user;


function setup() {
	//when connected to the server this will check for errors
	socket.on('connect', function () {
		$('#error').hide();
		$('#error').html('');
		$('#noerror').show();
		
		// in case the server is coming back online for an active user
        if (user) {
            socket.emit('user', name);
        }
	});

	//When there is an error it will display
	socket.io.on('connect_error', function (err) {
		$('#error').html(err + '<br>Chat server offline');
		$('#error').show();
		$('#noerror').hide();
	});

	//Used to display when another user (or yourself) sends a message
	socket.on('message', function (data) {
		printOut(data.user + ': ' + data.message);
	});

	//Used for when the user is first created. It copies existing users to this machnie's array
	socket.on('start', function (data) {
		users = data;
	});

	//WHen a new user is connected it display's it in the chat
	socket.on('welcome', function (data) {
		printOut(data.text);
	});

	//When a new user is made this is called and it adds the data to the array
	socket.on('otherUserConnect', function (data) {
		printOut(data + ' connected');
		users.push(data);
	});

	//When another user leaves this will remove him from the array
	socket.on('otherUserDisconnect', function (data) {
		printOut(data.name);
		for (var i = users.length - 1; i >= 0; --i) {
			if (users[i].id == data.id) {
				users.splice(i, 1);
			}
		}
	});

	//When the save button is clicked it will add to the array and send it to the server
	$('#user-save').click(function () {
		var username = $('#user-name');
		var txt = username.val().trim();
		if (txt.length > 0) {
			name = txt;
			username.prop('disabled', true);
			$(this).hide();
			$('#controls').show();
			$('#message').prop('disabled', false);
			$('#send').prop('disabled', false);
			$('#restart').prop('disabled', false);
			user = name;
			mainUser = user;
			socket.emit('user', {
				name: user
			});
		}
	});

	//When the user clicks the send button it will emit the message to the server
	$('#send').click(function () {
		var input = $('#message');
		var text = input.val().trim();
		if (text.length > 0) {
			socket.emit('message', text);
		}
		input.val('');
	});

	//Simple button to restart the page, not very important
	$('#restart').click(function () {
		location.reload();
	});

	//Made it easier to log things to the message area above the canvas
	function printOut(msg) {
		$('<div/>').text(msg).appendTo('#log');
	}

	//Called by the server to update the data in the users array with the other users data
	socket.on('update', function (stuff) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].id == stuff.id) {
				users[i].x = stuff.x;
				users[i].name = stuff.name;
				users[i].y = stuff.y;
			}
		}
	});

	//Creates the canvas for the sketches
	createCanvas(800, 600);
}

//Called to draw what is displayed in the canvas
function draw() {
	background(200);
	//Everytime draw is run it sends an updated x and y to the server so that the other computer's can update their location for this machine's user
	socket.emit('data', {
		x: mouseX,
		y: mouseY
	});
	noStroke();
	fill('black');
	textSize(32);
	//Shows a circle at the x and y
	ellipse(mouseX, mouseY, 15, 15);

	//Displays the other users' ellipses if there are any
	if (users.length >= 1) {
		for (var i = 0; i < users.length; i++) {
			//text(users[i].name, users[i].x, users[i].y - 25);
			ellipse(users[i].x, users[i].y, 15, 15);
		}
	}
}
