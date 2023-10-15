const fs = require('node:fs');
/*  
    Codigo hecho por: Bryan Cuaquehua Rodriguez

    El programa lee el archivo de texto llamado procedure.txt, despues itera por cada uno de los caracteres de este,
    si el caracter que estamos iterando se encuentra en los caracteres especiales que definimos, se cumple la condicional
    entonces dentro de la condicional tenemos otra condicional, en la cual si la palabra no esta vacia se realiza una insersion 
    de esta palabra al final del arreglo, despues se establece la palabra como vacia para seguir guardando caracteres que no sean
    caracteres especiales y aqui finaliza la segunda condicional, depues se insertan los caracteres especiales al final del arreglo.
    Si el caracter en el que estamos iterando no se encuentra en los caracteres especiales que definimos, no se cumple la 
    primera condicional y entramos al else, donde los caracteres se iran concatenando para formar una palabra, se concatenan 
    hasta que se encuentra un caracter especial y se cumple la primera condicional, entonces se realiza todo lo que ya se 
    explico de la primera condicional. Para finalizar se imrpime en consola el arraySpliteado, el cual contiene todas las palabras, 
    numeros y caracteres especiales separados.

*/


fs.readFile('procedure.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);
        return;
    }
        //const array = data.split('\n');
        const caracteres_Especiales = [';', ':', "'", '=', '(', ')', '"','*', '.', ' ', '@', '[', ']', '|', '\n', '\r']
        let arraySpliteado = [];
        //const array = cadena_split.map(linea => linea.trim())
        let palabra = "";

        for (let i = 0; i < data.length; i++) {
            const caracter = data[i];
            if (caracteres_Especiales.includes(caracter)) {
                if (palabra !== "") {
                    arraySpliteado.push(palabra); // inserta todas las palabras al final del arreglo
                    //console.log(palabra);
                    palabra = "";
                }
                arraySpliteado.push(caracter) //inserta todos los caracteres al final del arreglo
            }
            else{
                palabra += caracter; //con esto se concatena todo aquello que no es un caracter especial
            }
        }
        
        console.log(arraySpliteado);

    fs.readFile('sqlkeywords.txt', 'utf-8', (err, datos) => {
        if (err){
            console.log(err);
            return;
        } 
        
        const caracteres_separadores = [' ', '"']
        let palabras_reservadas = [];
        let tokens = [];
        let palabra = ""
        let numeros = [];
        let num = '';

        for (let i = 0; i < datos.length; i++) {
            const caracter = datos[i];
            if (!isNaN(caracter) ) {
                if (palabra !== "") {
                    palabras_reservadas.push(palabra); // inserta todas las palabras al final del arreglo
                    palabra = "";
                }
            }
            else if (!caracteres_separadores.includes(caracter)) {
                palabra += caracter;
            }
            if (isNaN(caracter)) {
                if (num !== "") {
                    numeros.push(num);
                    num = "";
                }
            }
            else if (!caracteres_Especiales.includes(caracter)){
                num += caracter;
            }
        }

        console.log(palabras_reservadas);
        console.log(numeros);
        
        for (let i = 0; i < palabras_reservadas.length; i++) {
            for (let j = 0; j < arraySpliteado.length; j++) {
                if (palabras_reservadas[i] === arraySpliteado[j]) {
                    //console.log(`Encontrado: ${palabras_reservadas[i]}`);
                    let indice = numeros.indexOf(palabras_reservadas);
                    console.log(indice);
                }
            }
            }

    });
});

