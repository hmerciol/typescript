class Sejour {
    constructor(private _nom:string, private _prix:number){}

    get nom():string{
        return this._nom;
    }
    get prix():number{
        return this._prix;
    }
}

class SejourService {
    _sejours:Sejour[]

    constructor(){
        this._sejours = new Array;
        this._sejours.push(new Sejour('Nantes',250));
        this._sejours.push(new Sejour('Paris',550));
        this._sejours.push(new Sejour('Paris',650));
        this._sejours.push(new Sejour('Rennes',175));
        this._sejours.push(new Sejour('Rennes',200));
        this._sejours.push(new Sejour('Toulouse',300));
    }

    recherche(nom:string):Sejour[] {
        return this._sejours.filter(s => s.nom == nom);
    }
}

let sejourTest = new SejourService();
console.log(sejourTest.recherche('Rennes'));