"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicioreservaControllers_1 = __importDefault(require("../controllers/servicioreservaControllers"));
class ServicioReservaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', servicioreservaControllers_1.default.list);
        this.router.get('/:id', servicioreservaControllers_1.default.getOne);
        this.router.post('/', servicioreservaControllers_1.default.create);
        this.router.delete('/:id', servicioreservaControllers_1.default.delete);
        this.router.put('/:id', servicioreservaControllers_1.default.update);
    }
}
const servicioReservaRoutes = new ServicioReservaRoutes();
exports.default = servicioReservaRoutes.router;
