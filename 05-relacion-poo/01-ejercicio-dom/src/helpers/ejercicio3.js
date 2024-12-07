export function Empleado(nombre, edad, salario) {

    this.nombre = nombre;
    this.edad = edad;
    this.salario = salario;
    // salario lo hago compartido para la clase
    Empleado.prototype.calcularSalario = function(){
        return {
            junior: 1500,
            senior: 1700,
            master: 1900
        }
    }

    Empleado.prototype.info = function(){
        console.log(`Nombre: ${this.nombre} --- Edad: ${this.edad} --- Salario: ${this.calcularSalario()} $`);
    }
}

// funcion hija
export function EmpleadoFreelancer(nombre, edad, salario) {
    Empleado.call(this, nombre, edad, salario);
    this.preciohora = this.preciohora;
    // tengo que hacer heredar los metodos de la funcion PADRE
    EmpleadoFreelancer.prototype = Object.create(Empleado.prototype);
    // y que el constructor sea el del padre
    EmpleadoFreelancer.prototype.constructor = EmpleadoFreelancer;

    EmpleadoFreelancer.prototype.info = function(){
        console.log(`Nombre: ${this.nombre} --- Edad: ${this.edad} --- Salario: ${this.salario} $`);
    }

}