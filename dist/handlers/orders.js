"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.closedOrders = exports.openOrders = exports.update = exports.addProduct = exports.create = exports.show = exports.index = void 0;
var order_1 = require("../models/order");
var store = new order_1.OrderStore();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ordersIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.index()];
            case 1:
                ordersIndex = _a.sent();
                res.json(ordersIndex);
                return [2 /*return*/];
        }
    });
}); };
exports.index = index;
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderShow;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show(parseInt(req.params.id))];
            case 1:
                orderShow = _a.sent();
                res.json(orderShow);
                return [2 /*return*/];
        }
    });
}); };
exports.show = show;
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newOrderInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.create(req.body.userId, req.body.orderStatus)];
            case 1:
                newOrderInfo = _a.sent();
                res.json(newOrderInfo);
                return [2 /*return*/];
        }
    });
}); };
exports.create = create;
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, orderProd, newOrderProd, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderId = req.params.id;
                orderProd = req.body;
                return [4 /*yield*/, store.addProduct(orderProd, parseInt(orderId))];
            case 1:
                newOrderProd = _a.sent();
                res.json(newOrderProd);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw new Error("Could not add order/product: ".concat(error_1));
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProduct = addProduct;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.update(req.body.orderStatus, req.body.id)];
            case 1:
                updatedOrder = _a.sent();
                res.json(updatedOrder);
                return [2 /*return*/];
        }
    });
}); };
exports.update = update;
var openOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var openOrdersIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show(parseInt(req.params.user_id))];
            case 1:
                openOrdersIndex = _a.sent();
                res.json(openOrdersIndex);
                return [2 /*return*/];
        }
    });
}); };
exports.openOrders = openOrders;
var closedOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var closedOrdersIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show(parseInt(req.params.user_id))];
            case 1:
                closedOrdersIndex = _a.sent();
                console.log(closedOrdersIndex);
                res.json(closedOrdersIndex);
                return [2 /*return*/];
        }
    });
}); };
exports.closedOrders = closedOrders;
