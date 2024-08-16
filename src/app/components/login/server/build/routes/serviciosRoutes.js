"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviciosControllers_1 = __importDefault(require("../controllers/serviciosControllers"));
class ServiciosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', serviciosControllers_1.default.list);
        this.router.get('/:IdServicio', serviciosControllers_1.default.getOne);
        this.router.post('/', serviciosControllers_1.default.create);
        this.router.delete('/:IdServicio', serviciosControllers_1.default.delete);
        this.router.put('/:IdServicio', serviciosControllers_1.default.update);
    }
}
const serviciosRoutes = new ServiciosRoutes();
exports.default = serviciosRoutes.router;
