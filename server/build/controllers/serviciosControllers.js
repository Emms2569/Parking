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
class ServiciosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const Servicio = yield database_1.default.query('Select * FROM Servicio');
            resp.json({ Servicio });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdServicio } = req.params;
            const Servicio = yield database_1.default.query('SELECT * FROM Servicio WHERE IdServicio=?', [IdServicio]);
            if (Servicio.length > 0) {
                return resp.json(Servicio[0]);
            }
            resp.status(404).json({ text: 'El servicio no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Servicio set ?', [req.body]);
            resp.json({ message: 'El servicio fue registrado :)' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdServicio } = req.params;
            yield database_1.default.query('DELETE FROM Servicio WHERE IdServicio=?', [IdServicio]);
            resp.json({ message: 'El servicio fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdServicio } = req.params;
            yield database_1.default.query('UPDATE Servicio set ? WHERE IdServicio = ?', [req.body, IdServicio]);
            resp.json({ message: 'El servicio fue actualizado' });
        });
    }
}
const serviciosController = new ServiciosController();
exports.default = serviciosController;
