const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());

const HeaderRoutes = require("./Router/HeaderRoutes");
const AuthRoutes = require("./Router/AuthRoutes");
const CategoriesRoutes = require("./Router/CategoryRoutes");
const EthnicWearRoutes = require("./Router/EthnicWearRoutes");
const mensWearRoutes = require("./Router/MensRoutes");
const cartRoutes = require("./Router/CartRoutes");
const addressRoutes = require("./Router/AddressRoutes");

app.use(express.json());

app.use("/api/Heading",HeaderRoutes);
app.use("/api/Auth",AuthRoutes);
app.use("/api/Category",CategoriesRoutes);
app.use("/api/Category",EthnicWearRoutes);
app.use("/api/Category",mensWearRoutes);
app.use("/api/Category",cartRoutes);
app.use("/api/Address",addressRoutes);

const server = http.createServer(app);

module.exports = server;