"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesControllers_1 = __importDefault(require("../controllers/clientesControllers"));
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientesControllers_1.default.list);
        this.router.get('/:IdCliente', clientesControllers_1.default.getOne);
        this.router.post('/', clientesControllers_1.default.create);
        this.router.delete('/:IdCliente', clientesControllers_1.default.delete);
        this.router.put('/:IdCliente', clientesControllers_1.default.update);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
