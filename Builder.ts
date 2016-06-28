/**
 *  @author: Jeroen Nouws
 *  @website: http://www.jeroennouws.be
 *
 *  Builder voorbeeld
 *
 *  Intentie:
 *  Scheidt de constructie van complexe objecten van zijn representatie, zodat hetzelfde constructie
 *  process gebruikt kan worden om verschillende representaties te creeeren.
 *
 *  Gebruik wanneer:
 *  -- het algoritme voor de create van complexe objecten onafhankelijk moet zijn van de onderdelen
 *     van het object en hoe ze samengevoegd worden.
 *  -- Het constructie process moet verschillende representaties van het object kunnen voorstellen
 *
 *  Voordelen:
 *  1: Laat toe om de interne representatie van het object te laten verschillen
 *  2: Isolatie van code voor constructie en representatie van het object
 *  3: Meer controle over de creatie van het object, in plaats dat het object in 1 keer gecreeerd wordt,
 *     wordt hier het object stap per stap opgebouwd
 *
 * */
import { Prototype } from './Prototype';

module Builder {

    export class DomElement {

        private domString:string;

        constructor(domElementBuilder:DomElementBuilder) {
            this.domString = domElementBuilder.getDomString();
        }

        public toString() {
            return this.domString;
        }
    }

    export class DomElementBuilder {

        private domElement:string = "<";

        private type:string;

        constructor(type:string) {
            this.type = type;
            this.domElement += type;
            return this;
        }

        public setId(id:Prototype.IProperties) {
            this.domElement += ' ' + id.getProperties();
            return this;
        }

        public setClasses(classes:Prototype.IProperties) {
            this.domElement += ' ' + classes.getProperties();
            return this;
        }

        public setContent(content:string) {
            this.domElement += ">" + content;
            return this;
        }

        public getDomString():string {
            if (this.domElement.indexOf(">") < 0) {
                return this.domElement + "></" + this.type + ">";
            } else {
                return this.domElement += "</" + this.type + ">";
            }
        }

        public build():DomElement {
            return new DomElement(this);
        }
    }

}

export { Builder };