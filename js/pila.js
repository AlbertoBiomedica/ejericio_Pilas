// Pila con referencias
class Nodo {
    constructor(valorNodo, nodoSiguiente) {
        this.valor = valorNodo;
        this.siguiente = nodoSiguiente;
    }
}

class PilaNodos {
    constructor() {
        this.tope = null;
    }

    push(nuevoValor) {
        if (this.tope == null) {
            let nuevoNodo = new Nodo(nuevoValor, null);
            this.tope = nuevoNodo;
        } else {
            let nuevoNodo = new Nodo(nuevoValor, this.tope);
            this.tope = nuevoNodo;
        }
    }

    pop() {
        if (this.tope == null) {
            console.log("La pila está vacía");
            return null;
        }
        let valorDeNodoSacado = this.tope.valor;
        this.tope = this.tope.siguiente;
        return valorDeNodoSacado;
    }

    print() {
        if (this.tope == null) {
            console.log("La pila está vacía");
        } else {
            return this.tope.valor;
        }
    }
}

class Pila{
    constructor(){
        this.arreglo = [];
    }

    push(nuevoValor){
        this.arreglo.push(nuevoValor);
    }
    pop(){
        return this.arreglo.pop();
    }
    peek(){
        return this.arreglo[this.arreglo.length-1];
    }
    size(){
        return this.arreglo.length;
    }
    printWithoutModify(){
        console.log(this.arreglo);
    }
    printModify(){
        //Opción 1.
        /*
        let len = this.arreglo.length;
        for(let i=0;i<len;i++){
            console.log(this.arreglo.pop());
        }*/

        //Opción 2.
        while(this.arreglo.length != 0){
            console.log(this.arreglo.pop());
        }
    }
}