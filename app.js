//const fs = require('fs');
//const multiplicar = require('./multiplicar/multiplicar.js'); //el .js no es obligatorio
//const multiplicar = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(multiplicar);
/*let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${i*base}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo a sido creado');
});
*/

//let base = 'abc';
// let base = 4;

// console.log(process);
//let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            //.then(archivo => console.log(`Archivo creado: ${archivo.red}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);

// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));