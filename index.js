const express = require("express");
const app = express();
const port = process.env.PORT || 80 || 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/Public/index.html");
});

app.get("/script.js", (req, res) => {
	res.sendFile(__dirname + "/Public/script.js");
});

app.get("/style.css", (req, res) => {
	res.sendFile(__dirname + "/Public/style.css");
});

app.get("/:folder/:filename", (req, res) => {
	res.sendFile(__dirname + `/Public/${req.params.folder}/${req.params.filename}`);
});

app.get("*", (req, res) => {
	res.send("Hey!!! You found a non existing path! This is the 404 page :D");
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}.`)
})