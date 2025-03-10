import { CustomEvent } from "./Event";

export class EventManager{
    #events=[];
    #apiUrl;
    constructor(apiUrl){
        this.#apiUrl = apiUrl;
    }

    async getData(){
        try{
            const response = await fetch(this.#apiUrl);
            if(!response.ok){
                throw new Error("Error al obtener los eventos")
            }
            const data = await response.json();
            this.#events.push(data)
        } catch(error){
            console.error(error)
        }
    }

    async deleteData(eventId){
        try{
            const response = await fetch(`${this.#apiUrl}/${eventId}`,{method:"DELETE"});
            if(!response.ok){
                throw new Error("Error al obtener los eventos")
            }
            this.#events = this.#events.filter(id=>id!==eventId);
        } catch(error){
            console.error(error)
        }
    }

    markAsImportant(eventId){
        let importantEvents = JSON.parse(localStorage.getItem("importantEvents")|| []);

        if(importantEvents.find((id)=>id === eventId)){
            let importantEvents = importantEvents.filter((id)=>id !== eventId)
        } else {
            importantEvents.push(eventId);
        }
        localStorage.setItem("importantEvents",JSON.stringify(importantEvents));
    }

    getImportantEvents(){
        return JSON.parse(localStorage.getItem("importantEvents") || []);
    }

    getEvents(){
        return this.#events;
    }
}