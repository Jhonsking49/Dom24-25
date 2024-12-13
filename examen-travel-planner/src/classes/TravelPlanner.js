/**
 * @description Archivo js que crea la clase TravelPlanner
 * @author Juan Rey Gonzalez
 */
import { Destination } from "./Destination";

export class TravelPlanner{
    constructor(destinations, apiUrl){
        this.destinations = destinations = [];
        this.apiUrl = apiUrl = "http://localhost:3500/destinations";
    }

    async fetchDestinations(){
        try {
            const response = await fetch(this.apiUrl);
            if(!response.ok){
                throw new Error("Error al obtener la data en la clase");
            }
            const data = response.json();
            
            const destinos = [];
            this.destinations = Array.from(data, (destino) => destinos.push(destino));
            
            return this.destinations;
        } catch (error) {
            console.error(error)
        }

    }

    async addDestination(destination){
        const data = new Destination({"id:" : destination.id},{"name" : destination.name},{"date" : destination.date},{"budget" : destination.tripCost});
        const response = await fetch(`http://localhost:3500/destinations`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',

            }
        });
    }


}