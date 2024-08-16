"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ubicacionControllers_1 = __importDefault(require("../controllers/ubicacionControllers"));
class UbicacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ubicacionControllers_1.default.list);
        this.router.get('/:id', ubicacionControllers_1.default.getOne);
        this.router.post('/', ubicacionControllers_1.default.create);
        this.router.delete('/:id', ubicacionControllers_1.default.delete);
        this.router.put('/:id', ubicacionControllers_1.default.update);
    }
}
const ubicacionRoutes = new UbicacionRoutes();
exports.default = ubicacionRoutes.router;
