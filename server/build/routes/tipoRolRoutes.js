"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoRolControllers_1 = __importDefault(require("../controllers/tipoRolControllers"));
class TipoRolRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipoRolControllers_1.default.list);
        this.router.get('/:IdRol', tipoRolControllers_1.default.getOne);
        this.router.post('/', tipoRolControllers_1.default.create);
        this.router.delete('/:IdRol', tipoRolControllers_1.default.delete);
        this.router.put('/:IdRol', tipoRolControllers_1.default.update);
    }
}
const tipoRolRoutes = new TipoRolRoutes();
exports.default = tipoRolRoutes.router;
