/*
    Hecho por: Bryan Cuaquehua Rodriguez
    El programa recorre los numeros del arreglo camino n veces, donde n son los numeros 
    del arreglo pasos, los numeros se recorren respeto a los indices de ambos arreglos, ejemplo:
    pasos = [2, 2], camino = [1, 2, 3, 4, 5], esto quiere decir que el numero 1 que esta en la posicion
    0 del arreglo camino se movera 2 veces que esta en la posicon 0 del arreglo pasos. 

    En el codigo realizado utilice una funcion que recibe como parametros los pasos y el camino, los cuales
    seran arreglos, despues se valida que el arreglo pasos no sea mayor al arreglo camino, y que el arreglo pasos tenga al menos
    1 elemento, para hacer que los numeros cambien de posicion me base en el ordenamiento burbuja, ya que este metodo cambia
    de posicion dos numeros, entonces hice algo muy similar, por medio de un ciclo for que para hasta que no haya mas pasos 
    utilice un do while para recorrer los numeros del arreglo  camino, el numero se recorrera mientras que la variable contPasos 
    sea menor que el arreglo pasos en el indice [i]. Por ultimo utilice una condicional que cambia el ultimo valor por el primero en
    el arreglo camino



*/

const pasos  = [3, 6, 2]
const camino = [1, 2, 3, 4, 5]

function caminar (pasos, camino){
    if (pasos.length <= camino.length && pasos.length > 0 ){

        console.log( "Arreglo original: " );
        console.log( camino );
        console.log( "Pasos: " );
        console.log(pasos);

        console.log( "-----------------" );
        //console.log( "Pasos: " );
        for (let i = 0; i < pasos.length; i++) {
            
            var contPasos = i;
            //console.log( camino );
            var paso = 1;

            do {
                
                if ( camino[contPasos] == camino[camino.length-1]) {
                    var valorFinal = camino[contPasos];
                    camino[contPasos] = camino[0];
                    camino[0] = valorFinal;
                    //contPasos = 0;
                }else {
                    var temp = camino[contPasos];
                    camino[contPasos] = camino[contPasos + 1];
                    camino [contPasos + 1] = temp;
                }

                console.log("Paso: " + paso );
                console.log(camino);
                //console.log("valor de i: "+i);
                contPasos++;
                paso++;
            } while (contPasos<pasos[i]);
        }
    }
    else {
        console.log("No se cumplen los requisitos");
    }
}

caminar(pasos, camino);
//console.log(pasos);

