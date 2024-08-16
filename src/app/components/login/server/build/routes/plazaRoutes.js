"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plazaControllers_1 = __importDefault(require("../controllers/plazaControllers"));
class PlazaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', plazaControllers_1.default.list);
        this.router.get('/:id', plazaControllers_1.default.getOne);
        this.router.post('/', plazaControllers_1.default.create);
        this.router.delete('/:id', plazaControllers_1.default.delete);
        this.router.put('/:id', plazaControllers_1.default.update);
    }
}
const plazaRoutes = new PlazaRoutes();
exports.default = plazaRoutes.router;
