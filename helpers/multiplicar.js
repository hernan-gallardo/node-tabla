const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base) => {
    console.log('===============');
    console.log(`  Tabla del ${base}`);
    console.log('===============');

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    };

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado`);
};

const crearArchivoConPromesa = (base) => {

    return new Promise((resolve, reject) => {
        console.log('===============');
        console.log(`  Tabla del ${base}`);
        console.log('===============');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    });

};

const crearArchivoConAsync = async (base = 5, listar = false, hasta = 10) => {

    try {
        if(listar) {
            console.log('===============');
            console.log(`  Tabla del ${base}`);
            console.log('===============');
        }
    
        let salida, consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.green(base)} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
            //salida += colors.green(base) + ' x '.blue + colors.red(i) + ' = '.yellow + colors.underline(base * i) + `\n`;
        };
    
        if (listar) console.log(consola);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;        
    }
};


module.exports = {
    crearArchivo, //function: crearArchivo
    crearArchivoConPromesa,
    crearArchivoConAsync
}

//OBS: En ECNAScript crearArchivo: crearArchivo es redundante, se puede poner solo crearArchivo