const express = require("express");

let per = 0;
let time = new Date();

const app = express();
app.get("/oon", first);
app.get("/", client);
app.listen(3001);

function first(req, res, err){
	let now = new Date();
	per += (20000 / (now - time)) * 100
	per /= 2
	time = now
	res.json({"Percentage on": per});
}

function client(req, res, err){
	let page = "<!doctype html>" +
"<html>" +
"<head><title>Streetlight Usage Tracker</title></head>" +
"<body>" +
"<h1> Percentage of time when lights were on : " + per + "</h1>" +
"</body>" +
"</html>";

	res.status(200).end(page);
}
