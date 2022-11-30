"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../../handlers/users");
const users_2 = require("../../handlers/users");
const users_3 = require("../../handlers/users");
const users_4 = require("../../handlers/users");
const userRoute = express_1.default.Router();
userRoute.get('/', users_1.index);
userRoute.get('/:id', users_2.show);
userRoute.post('/', users_3.create);
userRoute.delete('/:id', users_4.remove);
exports.default = userRoute;
