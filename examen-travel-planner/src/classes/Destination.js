/**
 * @description Clase que representa un destino de viaje para el planificador de viajes
 * @author Juan Rey González
 */

export class Destination {
    // Propiedades privadas
    #name;
    #date;
    #tripCost;

    /**
     * @param {string} name - Nombre del destino
     * @param {string} date - Fecha del viaje en formato YYYY-MM-DD
     * @param {number} tripCost - Presupuesto estimado del viaje
     */
    constructor(name, date, tripCost) {
        this.#name = name;
        this.#date = date;
        this.#tripCost = tripCost;
    }
    
    /**
     * Actualiza el presupuesto del destino
     * @param {number} newTripCost - Nuevo presupuesto estimado
     */
    updateTripCost(newTripCost) {
        if (typeof newTripCost !== 'number' || newTripCost <= 0) {
            throw new Error("El nuevo presupuesto debe ser un número positivo.");
        }
        this.#tripCost = newTripCost;
    }
    
    /**
     * Devuelve información del destino
     * @returns {string} - Descripción del destino
     */
    info() {
        return `El viaje a ${this.#name}, para la fecha ${this.#date}, tiene un presupuesto estimado de $${this.#tripCost}`;
    }
    
    /**
     * Obtiene el nombre del destino
     * @returns {string} - Nombre del destino
     */
    getName() {
        return this.#name;
    }
    
    /** 
     * Obtiene la fecha del viaje
     * @returns {string} - Fecha del viaje
     */
    getDate() {
        return this.#date;
    }
    
    /**
     * Obtiene el presupuesto del destino
     * @returns {number} - Presupuesto estimado
     */
    getTripCost() {
        return this.#tripCost;
    }
}
