"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.remove = exports.create = exports.show = exports.index = void 0;
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
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    });
    res.json(newUser);
};
exports.create = create;
const remove = async (req, res) => {
    const deletedUser = await store.delete(parseInt(req.params.id));
    res.json(deletedUser);
};
exports.remove = remove;
const authenticate = async (req, res) => {
};
exports.authenticate = authenticate;
