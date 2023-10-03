const fs = require('node:fs');

function validarArray(array) {
    //console.log(array);
    for (let i = 0; i < array.length; i++) {
       // console.log("["+ array[i]+ "]");
        if (array[i] !== '0' && array[i] !== '1') {
            console.log("Errorsito: " + array[i]);

            return false;
        }
    }
    return true; 
}

const matrix = [];

fs.readFile('binarios.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);
        return;
    } 
        var cadena_split = data.split('\n');
        //pa q funcione en windows
        //cadena_split[0] = cadena_split[0].slice(0, cadena_split[0].length-1);
        //cadena_split[1] = cadena_split[1].slice(0, cadena_split[1].length-1);
        //este ultimo no se pone pq en windows al ultimo elemento no le agrega
        //el espacio que le agrega a los anteriores
        //cadena_split[2] = cadena_split[2].slice(0, cadena_split[2].length-1);
        var validar_length = cadena_split[0].length;
        console.log(validar_length);
        for (let i = 0; i < cadena_split.length; i++) {
            if (validar_length == cadena_split[i].length) {
               // console.log("["+cadena_split[i]+ "]");
                if (validarArray(cadena_split[i])) {
                    matrix[i] = cadena_split[i];
                    console.log(cadena_split[i]);
                }
                else{
                    console.log("bad char");
                }
            }
            else{
                console.log("ERROR no mide lo mismo el renglon " + i);
                break;
            }
        }
        console.log(matrix);
});