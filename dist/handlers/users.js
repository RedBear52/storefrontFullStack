"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.show = exports.index = void 0;
const user_1 = require("../models/user");
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
    const newUser = await store.create({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        // password here???   or just a token???
        password: req.body.password
        // password here???   or just a token???
    });
    res.json(newUser);
};
exports.create = create;
