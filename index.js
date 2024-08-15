"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var express = express_1.default;
var app = express();
app.use((0, cors_1.default)({
    origin: "htpp://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());
app.listen(3000, function () {
    console.log("Conectado");
});
