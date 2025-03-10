export class CustomEvent{
    #title;
    #date;
    #id;

    constructor(title,date,id = null){
        this.#id = id || crypto.randomUUID();
        this.#title= title;
        this.#date = date;
    }

    getTitle(){
        return this.#title;
    }

    getDate(){
        return this.#date;
    }

    getId(){
        return this.#id;
    }
}