const express = require("express");

let on = 0, total = 0;

const app = express();
app.get("/:oon/:ttotal", first);
app.get("/", client);
app.listen();

function first(req, res, err){

	on += req.params.oon
	total += req.params.ttotal
	let used = (on/total)*100

	res.json({"Percentage on": used});
}

function client(req, res, err){
	let page = "<!doctype html>" +
"<html>" +
"<head><title>Streetlight Usage Tracker</title></head>" +
"<body>" +
"<h1> Percentage of time when lights were on : " + (on / total)*100 + "</h1>" +
"</body>" +
"</html>";

	res.status(200).end(page);
}
