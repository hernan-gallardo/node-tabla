const { crearArchivo, crearArchivoConPromesa, crearArchivoConAsync } = require('./helpers/multiplicar');

console.clear();

const base = 5;

//crearArchivo(base);

/*crearArchivoConPromesa(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
*/
crearArchivoConAsync(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));


//const fs = require('fs');

//console.clear();
//console.log('===============');
//console.log('  Tabla el 5');
//console.log('===============');

//const base = 5;
//let salida = '';

//for (let i = 1; i <= 10; i++) {
//    //console.log(`${base} x ${i} = ${base * i}`);
//    salida += `${base} x ${i} = ${base * i}\n`;
//};

//console.log(salida);

//    /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//        if (err) throw err;
//        console.log(`tabla-${base}.txt creada`);
//    });*/
//fs.writeFileSync(`tabla-${base}.txt`, salida);
//console.log(`tabla-${base}.txt creada`);
