const argv = require('./config/yargs').argv;

const colors = require('colors');


const { crearArchivo, listar } = require('./multiplicar/multiplicar.js')


let comando = argv._[0];


switch (comando) {

    case 'listar':
        console.log('Función listar');
        listar(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('Función crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.bgRed.bold))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no listado');
        break;

}