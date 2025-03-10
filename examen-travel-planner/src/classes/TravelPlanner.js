/**
 * @description Clase que gestiona la lista de destinos y la interacción con la API
 * @author 
 */
import { Destination } from "./Destination";

export class TravelPlanner {
    // Propiedades privadas
    #destinations;
    #apiUrl;

    /**
     * Constructor de TravelPlanner
     * @param {string} apiUrl - URL base de la API
     */
    constructor(apiUrl = "http://localhost:3500/destinations") {
        this.#destinations = [];
        this.#apiUrl = apiUrl;
    }

    /**
     * Obtiene los destinos de la API y los convierte en instancias de Destination
     * @returns {Promise<Destination[]>} - Lista de instancias de Destination
     */
    async fetchDestinations() {
        try {
        const response = await fetch(this.#apiUrl);
        if (!response.ok) {
            throw new Error("Error al obtener los destinos de la API");
        }

        const data = await response.json();
        this.#destinations = data.map(
            (dest) => new Destination(dest.name, dest.date, dest.budget)
        );

        return this.#destinations;
        } catch (error) {
        console.error("Error en fetchDestinations:", error);
        throw error; // Propagamos el error para manejo externo si es necesario
        }
    }

    /**
     * Agrega un nuevo destino a la API y a la lista interna
     * @param {Destination} destination - Instancia de Destination
     * @returns {Promise<void>}
     */
    async addDestination(destination) {
        try {
        const response = await fetch(this.#apiUrl, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            name: destination.getName(),
            date: destination.getDate(),
            budget: destination.getTripCost(),
            }),
        });

        if (!response.ok) {
            throw new Error("Error al agregar un destino a la API");
        }

        // Actualizamos la lista interna con el nuevo destino
        this.#destinations.push(destination);
        } catch (error) {
        console.error("Error en addDestination:", error);
        throw error;
        }
    }

    /**
     * Elimina un destino de la API y de la lista interna
     * @param {string} destinationId - ID del destino a eliminar
     * @returns {Promise<void>}
     */
    async deleteDestination(destinationId) {
        try {
        const response = await fetch(`${this.#apiUrl}/${destinationId}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al eliminar el destino de la API");
        }

        // Eliminamos el destino de la lista interna
        this.#destinations = this.#destinations.filter(
            (dest) => dest.id !== destinationId
        );
        } catch (error) {
        console.error("Error en deleteDestination:", error);
        throw error;
        }
    }

    /**
     * Devuelve todos los destinos almacenados en la lista interna
     * @returns {Destination[]} - Lista de instancias de Destination
     */
    getDestinations() {
        return this.#destinations;
    }
}
