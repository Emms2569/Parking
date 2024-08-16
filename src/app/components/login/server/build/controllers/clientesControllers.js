"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClientesController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const Cliente = yield database_1.default.query('Select * FROM Cliente');
            resp.json({ Cliente });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdCliente } = req.params;
            const Cliente = yield database_1.default.query('SELECT * FROM Cliente WHERE IdCliente=?', [IdCliente]);
            if (Cliente.length > 0) {
                return resp.json(Cliente[0]);
            }
            resp.status(404).json({ text: 'El cliente no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Cliente set ?', [req.body]);
            resp.json({ message: 'El cliente fue registrado :)' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdCliente } = req.params;
            yield database_1.default.query('DELETE FROM Cliente WHERE IdCliente=?', [IdCliente]);
            resp.json({ message: 'El cliente fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdCliente } = req.params;
            yield database_1.default.query('UPDATE Cliente set ? WHERE IdCliente = ?', [req.body, IdCliente]);
            resp.json({ message: 'El cliente fue actualizado' });
        });
    }
}
const clientesController = new ClientesController();
exports.default = clientesController;
