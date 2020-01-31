//requireds

const fs = require('fs');
const colors = require('colors');
//const require('express');
//const require('./path');

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Los valores introducidos no son válidos')
            return
        }
        var lista
        for (let i = 1; i <= limite; i++) {

            lista += ('####### \n'.blue + `${base}*${i} = ${base*i} \n`.green);
            // lista.push(...)
        }
        resolve(lista);

    });
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Los valores introducidos no son válidos`)
            return
        }

        var texto = new Array;

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base}*${i}= ${base*i}`);

            var result = `${base}*${i}= ${base*i} \n`
            texto.push(result);
        }
        // const data = new Uint8Array(Buffer.from('Hola Mundo'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, texto, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}