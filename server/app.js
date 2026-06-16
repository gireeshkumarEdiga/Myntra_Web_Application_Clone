const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());

const HeadingRoutes = require("./Router/HeaderRoutes");

app.use(express.json());

app.use("/api/Heading",HeadingRoutes);

const server = http.createServer(app);

module.exports = server;