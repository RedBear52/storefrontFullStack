"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = "0.0.0.0:3000";
const corsOptions = {
    origin: 'https://localhost:3000',
    optionsSuccesStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', function (_req, res) {
    res.send('Howdy Multiverse!');
});
app.use('/api', routes_1.default);
app.listen(3000, function () {
    console.log(`starting app on: ${port}`);
});
exports.default = app;
