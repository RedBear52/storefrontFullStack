"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenSecret = process.env.TOKEN_SECRET;
const authenticateToken = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.slice(7);
        // console.log(token)
        const verifiedToken = jsonwebtoken_1.default.verify(token, tokenSecret);
        res.locals.users = verifiedToken;
        // console.log(res.locals)
        next();
    }
    catch (error) {
        res.status(401);
        res.send(`Token authentication failed:  ${error}`);
    }
};
exports.authenticateToken = authenticateToken;
