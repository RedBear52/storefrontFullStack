"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var users_1 = require("../../handlers/users");
var users_2 = require("../../handlers/users");
var users_3 = require("../../handlers/users");
var users_4 = require("../../handlers/users");
var users_5 = require("../../handlers/users");
var userRoute = express_1["default"].Router();
userRoute.get('/', users_1.index);
userRoute.get('/:id', users_2.show);
userRoute.post('/', users_3.create);
userRoute["delete"]('/:id', users_5.authenticate, users_4.remove);
userRoute.post('/authenticate', users_5.authenticate);
exports["default"] = userRoute;
