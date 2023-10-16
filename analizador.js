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

    #2da parte 
    La segunda parte del codigo lee otro archivo de texto llamado sqlkeywords.txt, donde se encuentran las palabras reservadas
    y su respectivo numero o token asignado, al igual que en la primera parte, se itera caracter por caracter de este archivo, 
    si el caracter en el que estamos iterando es un numero, entoces entramos a la condicional, donde tenemos otra condicional
    la cual se cumple si la palabra es diferente de vacia, si esto se cumple, la palabra se inserta en el arreglo de palabras_reservadas
    y a la palabra le asignamos el valor de vacio para seguir formando palabras despues y que estas no se junten una con otra, 
    despues tenemos la condicional else if, en la cual si el caracter en el que estamos iterando es diferente de los caracteres_separadores
    los caracteres se iran concatenando en palabra hasta que la condiconal deje de cumplirse y entre a la anterior condiconal. 
    las dos condicionales anteriores son para insertar palabras reservadas en el arreglo palabras_reservadas.

    Despues tenemos otras dos condicionales, pero estas se usan para insertar los numeros en el arreglo numeros, la primer condicional
    se cumple si el caracter en el que estamos iterando no es un numero, si esto se cumple, entramos a la condicional, donde hay 
    otra condicional, esta se cumple si la variable num es distinta de vacia (esta variable es para guardar los numeros encontrados
    en el documento de texto), si esto se cumple, entonces entramos a esta condicional y el num se inserta en el arreglo numeros
    y la variable num se establece en vacio para seguir formando numeros despues y que estos no se junten con los anteriores numeros, 
    despues tenemos otra condicional else if, en la cual si el caracter en el que estamos iterando es diferente de los caracteres_Especiales
    el caracter se ira concatenando en num hasta que esta condicional no se cumpla y entremos a la anterior condicional. 
    Una vez acabo de iterar todos los elementos del documento, se imprimen los arreglos palabras_reservadas y numeros. 

    Despues tenemos dos for anidados, los cuales recorreran cada elemento de los arreglos arraySpliteado y palabras_reservadas 
    respectivamente y se comparan los elementos que se van recorriendo, si los elementos de ambos arreglos son exactamente iguales 
    se cumple la condicional y se imprimen en consola los elementos iguales, depues en el arreglo numeros se toma el indice de 
    palabras_reservadas (j, el cual es el indice en de los elementos que se encontraron iguales) + 1 (esto debido a que  
    no me lee las comillas "" del documento de texto) y el elemento al que ingresamos se guarda en la variable numToken, 
    por ultimo insertamos la variable numToken en arreglo token. 

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
                    numeros.push(num); //inserta todos los numeros al final del arreglo
                    num = "";
                }
            }
            else if (!caracteres_Especiales.includes(caracter)){
                num += caracter;
            }
        }

        console.log(palabras_reservadas);
        console.log(numeros);
        
        for (let i = 0; i < arraySpliteado.length; i++) {
            for (let j = 0; j < palabras_reservadas.length; j++) {
                if (palabras_reservadas[j] === arraySpliteado[i]) {
                    console.log(`Encontrado: ${arraySpliteado[i]}`);
                    let numToken = numeros[j + 1];
                    tokens.push(numToken);
                }
            }
            }
            console.log(tokens);

    });
});

