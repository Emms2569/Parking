"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesoControllers_1 = __importDefault(require("../controllers/accesoControllers"));
class AccesoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', accesoControllers_1.default.list);
        this.router.get('/:id', accesoControllers_1.default.getOne);
        this.router.post('/', accesoControllers_1.default.create);
        this.router.delete('/:id', accesoControllers_1.default.delete);
        this.router.put('/:id', accesoControllers_1.default.update);
    }
}
const accesoRoutes = new AccesoRoutes();
exports.default = accesoRoutes.router;
