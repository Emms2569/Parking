"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagoControllers_1 = __importDefault(require("../controllers/pagoControllers"));
class PagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pagoControllers_1.default.list);
        this.router.post('/', pagoControllers_1.default.create);
        this.router.delete('/:id', pagoControllers_1.default.delete);
        this.router.put('/:id', pagoControllers_1.default.update);
    }
}
const pagoRoutes = new PagoRoutes();
exports.default = pagoRoutes.router;
