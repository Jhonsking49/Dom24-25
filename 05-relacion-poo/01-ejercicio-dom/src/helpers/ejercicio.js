// se recomienda crear las funciones fabrica con function ya que las agro funciones pueden dar problemas con el .this
export function Tarea(nombre) {
    Tarea.contador = 0;

    Tarea.id= Tarea.contador++;
    Tarea.nombre = nombre;
    Tarea.completada = false;

    // metodos publicos

    this.toggleCompletada = function(){
        this.completada = !this.completada;
    }

    // metodos privados

    function logEstado(){
        console.log(`La tarea ${this.nombre} está ${this.completada ? "completada" : "pendiente"}`);
    }

}

export class TareaClass {

    #completada;

    constructor(nombre) {
        this.id = TareaClass.contador++;
        this.nombre = nombre;
        this.#completada = false;
    }

    info() {
        console.log(`La tarea ${this.nombre} está ${this.#completada ? "completada" : "pendiente"}`);
    }

    toggleCompletada() {
        this.#completada = !this.#completada;
    }
}