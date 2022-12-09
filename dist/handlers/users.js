"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.remove = exports.create = exports.show = exports.index = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenSecret = process.env.TOKEN_SECRET;
const store = new user_1.UserStore();
const index = async (_req, res) => {
    const userIndex = await store.index();
    res.json(userIndex);
};
exports.index = index;
const show = async (req, res) => {
    const queriedUser = await store.show(parseInt(req.params.id));
    res.json({
        id: queriedUser.id,
        firstname: queriedUser.first_name,
        lastname: queriedUser.last_name
    });
};
exports.show = show;
const create = async (req, res) => {
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    };
    const newUser = await store.create(user);
    const token = jsonwebtoken_1.default.sign({ user: newUser }, tokenSecret);
    res.json(token);
};
exports.create = create;
const remove = async (req, res) => {
    const deletedUser = await store.delete(parseInt(req.params.id));
    res.json(deletedUser);
};
exports.remove = remove;
const authenticateUser = async (req, res) => {
    try {
        const userReq = req.body;
        const userInfo = await store.authenticateUser(userReq);
        if (userInfo) {
            const token = jsonwebtoken_1.default.sign(userInfo, tokenSecret);
            res.status(200).json(token);
        }
        else {
            res.status(400).json({ error: 'User was not authenticated' });
        }
    }
    catch (err) {
        res.status(500).json({ error: `Could not authenticate user: ${err}` });
    }
};
exports.authenticateUser = authenticateUser;
