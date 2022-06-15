const dotenv = require("dotenv");
const Captcha = require("2captcha");
const fs = require("fs");
const express = require("express");


dotenv.config();

const server = express();

const solver = new Captcha.Solver(process.env.API_KEY);

console.log(process.env.API_KEY)
solver
	.imageCaptcha(fs.readFileSync("./captcha.jpeg", "base64"))
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err.message);
	});

server.listen(process.env.PORT || 3001, () =>
	console.log("Server is running on port 3001")
);
