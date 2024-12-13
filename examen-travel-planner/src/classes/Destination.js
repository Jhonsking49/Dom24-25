/**
 * @description Archivo js que crea la clase TravelPlanner
 * @author Juan Rey Gonzalez
 */
export class Destination{
    constructor( name, date, tripCost){
        this.name = name;
        this.date = date;
        this.tripCost = tripCost;
    }

    updateTripCost(newTripCost) {
        this.date = newTripCost;
    }

    info(){
        return `El viaje a ${this.name}, para la fecha ${this.date} y con un presupuesto de ${this.tripCost}`;
    }
}