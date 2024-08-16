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
class RegistroESController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const RegistroES = yield database_1.default.query('Select * FROM RegistroES');
            resp.json({ RegistroES });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdRegistro } = req.params;
            const RegistroES = yield database_1.default.query('SELECT * FROM RegistroES WHERE IdRegistro=?', [IdRegistro]);
            if (RegistroES.length > 0) {
                return resp.json(RegistroES[0]);
            }
            resp.status(404).json({ text: 'El registro no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO RegistroES set ?', [req.body]);
            resp.json({ message: 'Registro guardado :)' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdRegistro } = req.params;
            yield database_1.default.query('DELETE FROM RegistroES WHERE IdRegistro=?', [IdRegistro]);
            resp.json({ message: 'El registro fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdRegistro } = req.params;
            yield database_1.default.query('UPDATE RegistroES set ? WHERE IdRegistro = ?', [req.body, IdRegistro]);
            resp.json({ message: 'El registro fue actualizado' });
        });
    }
}
const registroESController = new RegistroESController();
exports.default = registroESController;
