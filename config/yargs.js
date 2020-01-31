const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}



// Entre llaves va lo que este adentro de module.export
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea txt de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}