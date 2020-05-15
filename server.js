require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const userRouter = require("./users/userRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
	res.send(`<h1 style='font-size:100px'>Node API 4 Project</h1>`);
});

//custom middleware

function logger(req, res, next) {
	console.log(req.method + " Request");
	next();
}

module.exports = server;
