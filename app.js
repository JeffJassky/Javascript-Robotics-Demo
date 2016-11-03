// LIBRARY DEPENDENCIES
var express = require('express'); // import library
var server = express(); // create instance of express server

// SERVE STATIC FILES
server.use(express.static('public'));

// API
server.get('/api/position/:position', function (request, response) {
	console.log('Received position from slider', request.params.position);
	servo.to(request.params.position);
	response.send('ok');
});

// START THE WEB SERVER
server.listen(3000, function () {
	console.log('Example server listening on port 3000!');
});


// CONFIGURE ARDUINO
var five = require('johnny-five'); // import library
var board = new five.Board(); // create instance of arduino board
var servo; // create variable for servo

board.on('ready', function(){
	// This code runs when the board sucessfully connects
	console.log('Arduino connected');

	servo = new five.Servo(9); // create instance of servo
});