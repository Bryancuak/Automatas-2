const arreglo = [0,1,3,4];
const data = ["saludo", "mundo", 5, "safdskg"];

var arregloDiccionario = {}

function diccionario(arr, dat) {
    for (let i = 0; i < arr.length; i++) {
        if (dat[i] == undefined){return;}
            arregloDiccionario[arr[i]] = dat[i];
        console.log("arreglo diccionario: " + i + " "+ arregloDiccionario[i]);
    }
    
    
}

diccionario(arreglo,data);