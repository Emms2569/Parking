"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculosControllers_1 = __importDefault(require("../controllers/vehiculosControllers"));
class VehiculosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', vehiculosControllers_1.default.list);
        this.router.get('/:IdVehiculo', vehiculosControllers_1.default.getOne);
        this.router.post('/', vehiculosControllers_1.default.create);
        this.router.delete('/:IdVehiculo', vehiculosControllers_1.default.delete);
        this.router.put('/:IdVehiculo', vehiculosControllers_1.default.update);
    }
}
const vehiculosRoutes = new VehiculosRoutes();
exports.default = vehiculosRoutes.router;
