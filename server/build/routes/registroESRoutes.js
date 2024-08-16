"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroESControllers_1 = __importDefault(require("../controllers/registroESControllers"));
class RegistroESRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', registroESControllers_1.default.list);
        this.router.get('/:IdRegistro', registroESControllers_1.default.getOne);
        this.router.post('/', registroESControllers_1.default.create);
        this.router.delete('/:IdRegistro', registroESControllers_1.default.delete);
        this.router.put('/:IdRegistro', registroESControllers_1.default.update);
    }
}
const registroESRoutes = new RegistroESRoutes();
exports.default = registroESRoutes.router;
