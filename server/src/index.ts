console.log('WORKS!!!!!');
import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import vehiculosRoutes from './routes/vehiculosRoutes';
import clientesRoutes from './routes/clientesRoutes';
import registroESRoutes from './routes/registroESRoutes';
import tipoRolRoutes from './routes/tipoRolRoutes';
import serviciosRoutes from './routes/serviciosRoutes';

class Server{
    public app:Application; //Atributo de la clase
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config() : void{this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }
    routes() : void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/Vehiculo',vehiculosRoutes);
        this.app.use('/api/Cliente',clientesRoutes);
        this.app.use('/api/RegistroES',registroESRoutes);
        this.app.use('/api/TipoRol',tipoRolRoutes);
        this.app.use('/api/Servicio', serviciosRoutes);
    }
    start() :void{this.app.listen(this.app.get('port'),()=>{
        console.log('Server on port', this.app.get('port'));
    });
    }

}
new Server(); //Ejecuta la clase y devuelve un objeto
const server = new Server();
server.start();
