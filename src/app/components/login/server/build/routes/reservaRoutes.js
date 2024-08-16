"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservaControllers_1 = __importDefault(require("../controllers/reservaControllers"));
class ReservaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', reservaControllers_1.default.list);
        this.router.get('/:id', reservaControllers_1.default.getOne);
        this.router.post('/', reservaControllers_1.default.create);
        this.router.delete('/:id', reservaControllers_1.default.delete);
        this.router.put('/:id', reservaControllers_1.default.update);
    }
}
const reservaRoutes = new ReservaRoutes();
exports.default = reservaRoutes.router;
