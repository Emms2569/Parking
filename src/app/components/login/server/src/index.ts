import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import reservaRoutes from './routes/reservaRoutes';
import accesoRoutes from './routes/accesoRoutes';
import pagoRoutes from './routes/pagoRoutes';
import plazaRoutes from './routes/plazaRoutes';
import servivioreservaRoutes from './routes/servicioreservaRoutes';
import ubicacionRoutes from './routes/ubicacionRoutes';
import serviciosRoutes from './routes/serviciosRoutes';
import tipoRolRoutes from './routes/tipoRolRoutes';
import registroESRoutes from './routes/registroESRoutes';
import clientesRoutes from './routes/clientesRoutes';
import vehiculosRoutes from './routes/vehiculosRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.routes1();
        this.routes2();
        this.routes3();
        this.routes4();
        this.routes5();
        this.routes6();
        this.routes7();
        this.routes8();
        this.routes9();
        this.routes10();
    }

    config(): void {
        this.app.set('port', process.env['PORT'] || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));

    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/reserva', reservaRoutes);

    }
    
    routes1(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/acceso', accesoRoutes);

    }

    routes2(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/pago', pagoRoutes);

    }

    routes3(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/plaza', plazaRoutes);

    }

    routes4(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/servicioreserva', servivioreservaRoutes);

    }

    routes5(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/ubicacion', ubicacionRoutes);

    }
    routes6(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/Vehiculo', vehiculosRoutes);

    }

    routes7(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/Cliente', clientesRoutes);

    }

    routes8(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/RegistroES', registroESRoutes);

    }

    routes9(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/TipoRol', tipoRolRoutes);

    }

    routes10(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/Servicio', serviciosRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
