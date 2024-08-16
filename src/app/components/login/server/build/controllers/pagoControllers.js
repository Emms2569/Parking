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
exports.pagoController = void 0;
const database_1 = __importDefault(require("../database"));
class PagoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registros = yield database_1.default.query('SELECT * FROM pago');
                resp.json(registros);
            }
            catch (error) {
                console.error(error);
                resp.status(500).json({ message: 'Error al obtener los registros de pago' });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Pago = yield database_1.default.query('SELECT * FROM pago WHERE IdPago=?', [id]);
            if (Pago.length > 0) {
                return resp.json(Pago[0]);
            }
            resp.status(404).json({ text: 'El pago no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pago set ?', [req.body]);
            resp.json({ message: 'Pago guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pago WHERE idPago = ?', [id]);
            resp.json({ message: 'El pago fue borrado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pago set ? WHERE idPago = ?', [req.body, id]);
            resp.json({ message: 'El pago fue actualizado' });
        });
    }
}
exports.pagoController = new PagoController();
exports.default = exports.pagoController;
