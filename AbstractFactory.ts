/**
 *  @author: Jeroen Nouws
 *  @website: http://www.jeroennouws.be
 *
 *  Abstract Factory voorbeeld
 *
 *  Intentie:
 *  Biedt een interface aan om families van gerelateerde of dependent objecten aan te maken,
 *  zonder de concrete class te kennen.
 *
 *  Gebruik wanneer:
 *  -- een systeem onafhankelijk moet zijn van hoe de objecten gecreëerd worden
 *  -- een systeem geconfigureerd moet worden met een of meerdere families van objecten
 *  -- een familie objecten gedesigned is om samen te werken en constraints te forceren
 *  -- je een bibliotheek van objecten schrijft en enkel de interface wilt gebruiken
 *
 *  Voordelen:
 *  1: Isolatie van concrete classes
 *     i.e.: Client weet niet wat de concrete invulling van widgetFactory is
 *  2: client kan snel switchen van implementatie
 *      i.e.: widgetFactory in Client blijft steeds van het abstract type WidgetFactory
 *  3: Dwingt consistentie af binnen de concrete classes
 *      i.e.: beide concrete implementaties hebben een implemantatie van de abstracte functions
 *
 *  Nadelen:
 *  1: Nieuwe functionaliteit toevoegen moet in alle concrete classes gebeuren
 *      i.e.: beide concrete implementaties hebben een implemantatie van de abstracte functions
 *
 * */
import { Builder as Elements } from './Builder';
import { Prototype } from './Prototype';

module AbstractFactory {

    export abstract class AbstractWidgetFactory {

        protected rootProps:Prototype.IProperties = new Prototype.Properties;

        public createDiv(content:string):Elements.DomElement {
            return new Elements.DomElementBuilder('div')
                .setId(this.rootProps.clone('id', 'main'))
                .setClasses(this.rootProps.clone('classes', 'container-fluid'))
                .setContent(content)
                .build();

        }

        public createSpan(content:string):Elements.DomElement {
            return new Elements.DomElementBuilder('span')
                .setClasses(this.rootProps.clone('class', 'col-sm-12 text-right'))
                .setContent('Hello World!')
                .build();
        }

        public abstract getWidget(content: string):Elements.DomElement;

    }

    export class IosWidgetFactory extends AbstractWidgetFactory {

        private static __instance: AbstractWidgetFactory;

        public static getInstance(){
            if(this.__instance === undefined || this.__instance === null){
                this.__instance = new IosWidgetFactory();
            }

            return this.__instance;
        }

        public getWidget(content:string):Elements.DomElement {
            return new Elements.DomElementBuilder('body')
                .setClasses(this.rootProps.clone('class', 'ios-ready'))
                .setContent(content)
                .build();
        }

    }

    export class AndroidWidgetFactory extends AbstractWidgetFactory {

        private static __instance: AbstractWidgetFactory;

        public static getInstance(){
            if(this.__instance === undefined || this.__instance === null){
                this.__instance = new AndroidWidgetFactory();
            }

            return this.__instance;
        }

        public getWidget(content:string):Elements.DomElement {
            return new Elements.DomElementBuilder('body')
                .setClasses(this.rootProps.clone('class', 'android-ready'))
                .setContent(content)
                .build();
        }

    }
}

export { AbstractFactory };
