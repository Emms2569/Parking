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
exports.accesoController = void 0;
const database_1 = __importDefault(require("../database"));
class AccesoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registros = yield database_1.default.query('SELECT * FROM acceso');
                resp.json(registros);
                resp.json({ message: 'lista de registros de accesos' });
            }
            catch (error) {
                console.error(error);
                resp.status(500).json({ message: 'Error al obtener los registros de acceso' });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Acceso = yield database_1.default.query('SELECT * FROM acceso WHERE IdAcceso=?', [id]);
            if (Acceso.length > 0) {
                return resp.json(Acceso[0]);
            }
            resp.status(404).json({ text: 'El acceso no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO acceso set ?', [req.body]);
            resp.json({ message: 'Acceso guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM acceso WHERE idAcceso = ?', [id]);
            resp.json({ message: 'El acceso fue borrado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE acceso set ? WHERE idAcceso = ?', [req.body, id]);
            resp.json({ message: 'El acceso fue actualizado' });
        });
    }
}
exports.accesoController = new AccesoController();
exports.default = exports.accesoController;
