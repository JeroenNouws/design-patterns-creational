/**
 *  @author: Jeroen Nouws
 *  @website: http://www.jeroennouws.be
 *
 *  Prototype voorbeeld
 *
 *  Intentie:
 *  Specifieer welke objecten je wilt creeeren met een instantie van een prototype en creeer nieuwe objecten
 *  door dit prototype te clonen.
 *
 *  Gebruik wanneer:
 *  -- een object dat geinstantieerd moet worden, gespecificieerd wordt at run-time
 *  -- je een parallele klasse hierarchie wilt vermijden
 *  -- een object van de klasse, slechts enkele variaties in state kunnen hebben
 *
 *  Voordelen:
 *  1: Objecten toevoegen en verwijderen at-runtime
 *  2: Nieuwe objecten creeeren dmv variable waarden
 *  3: Verminderd aantal subklassen
 *  4: Een systeem configureren met dynamische klassen
 *
 *  Nadelen:
 *  1: De implementatie van het cloning mechanisme kan enorm complex worden
 *
 * */
module Prototype {

    export interface IProperties {
        key: string;
        value: string;

        clone(value:string): IProperties;
        getProperties(): string;
    }

    export class Properties implements IProperties {
        key:string;

        value:string;

        constructor(key?:string, value?:string) {
            this.key = key;
            this.value = value;
        }

        clone(key?:string, value?:string):Prototype.IProperties {
            return new Properties(key, value);
        }

        public getProperties(): string{
            let propString = '';
            propString += this.key;
            if(this.value){
                propString +='="'+this.value+'"';
            }

            return propString;
        }
    }
}

export { Prototype };
