import { SERVER_PORT } from './global/environment';
import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyParser: pasa los argumentos y en postman los pueden obtener en body y convertirlo a u objeto JSON
//BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
//pasar peticion JSON
server.app.use(bodyParser.json());
//basicamente las dos lineas de codigo anterior dice todo lo que me pasen genera un objeto js


//CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);

})