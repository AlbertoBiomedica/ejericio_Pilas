/*
1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].
*/

let pilaInicial = ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"];

function retornarElementosPila(pila, numElements) {
    let pila1 = new Pila();
    for (let i = 0; i < numElements; i++) {
        pila1.push(pila[i]);
    }
    return pila1;
}

let pilaFinal = retornarElementosPila(pilaInicial, 4);
console.log("Ejercicio 1")
console.table(pilaFinal.arreglo);

/*
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
*/

let pilaOriginal = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];

function reemplazar(pila, numNuevo, numViejo) {
    let pila1 = new Pila();
    for (let i = 0; i < pila.length; i++) {
        pila1.push(pila[i]);
    }

    for (let i = 0; i < pila1.size(); i++) {
        if (pila1.peek() !== numViejo) {
            pila1.pop();
        } else {
            pila1.arreglo[pila1.size() - 1] = numNuevo;
            break;
        }
    }

    return pila1;
}
let pilaModificada = reemplazar(pilaOriginal, 7, 2);
console.log("Ejercicio 2")
console.table(pilaModificada.arreglo);

/*
Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como
de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/
let recorrido = new Pila();
recorrido.push("Pueblo origen");
recorrido.push("Pueblo 1");
recorrido.push("Pueblo 2");
recorrido.push("Destino");

console.log("Ejercicio 3")
console.log("La trayectoria inicial es: ");
console.table(recorrido.arreglo)

console.log("La trayectoria de regreso es: ");
let retorno = [];
let acumulador = 0;
for (let i = (recorrido.size() - 1); i >= 0; i--) {
    retorno[acumulador] = recorrido.arreglo[i];
    acumulador++;
}
console.table(retorno)

/*Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están 
encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. */
let contenedores = [
    { id: 1, valor: "rojo" },
    { id: 2, valor: "azul" },
    { id: 3, valor: "amarillo" },
    { id: 4, valor: "verde" },
    { id: 5, valor: "naranja" },
    { id: 6, valor: "rosa" },
    { id: 7, valor: "cafe" },
]

function crearPilaContenedores(pila) {
    let pila1 = new Pila();
    for (let i = 0; i < pila.length; i++) {
        pila1.push(pila[i]);
    }
    return pila1;
}
console.log("Ejercicio 4")
let pilaContenedor = crearPilaContenedores(contenedores);
console.log("La pila original es : " + pilaContenedor)
for (let i = 0; i < pilaContenedor.size(); i++) {
    console.log(pilaContenedor.arreglo[i])
}
function sacarContenedor(pila, id) {
    let contenedorSacado = null;
    let contenedorTemporal = [];
    let contador = 0;
    let longitudPila = pila.size();
    for (let i = 0; i < longitudPila; i++) {
        if (pila.peek().id === id) {
            contenedorSacado = pila.peek();
            pila.pop();
            for(let i = (contenedorTemporal.length -1) ; i >= 0; i--){
                pila.push(contenedorTemporal[i]);
            }
            break;
        } else {
            contenedorTemporal[contador] = pila.peek();
            pila.pop();
            contador++;
        }
    }
    return [pila, contenedorSacado]
}

let [contenedoresModificados, contenedorSacado] = sacarContenedor(pilaContenedor, 3);

console.log("La nueva pila de contenedores es: ");
for (let i = 0; i < contenedoresModificados.size(); i++) {
    console.log(contenedoresModificados.arreglo[i])
}

console.log("El contenedor sacado es el de ID: " + contenedorSacado.id + " color: " + contenedorSacado.valor)