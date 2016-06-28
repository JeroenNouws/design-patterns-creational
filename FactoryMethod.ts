/**
 *  @author: Jeroen Nouws
 *  @website: http://www.jeroennouws.be
 *
 *  Factory Method voorbeeld
 *
 *  Intentie:
 *  Definieert een interface om objecten te creeeren, maar laat de subclasses beslissen welke klasse
 *  te instantieren. Factory Method delegeert de instantiatie naar subclasses.
 *
 *  Gebruik wanneer:
 *  -- een klasse niet kan anticiperen welke objecten het moet creeeren
 *  -- een klasse wilt dat zijn subklassen beslissen welk object te creeeren
 *  -- een klasse zijn responsibilities delegeert naar subklassen en je de kennis wilt
 *     lokaliseren naar welke subklassen er gedelegeert is
 *
 *  Voordelen:
 *  1: Objecten creeeren binnen een klasse met een factory method is flexibeler dan rechtstreeks objecten
 *     te instantieren
 *  2: Verbindt parralelle klasse hierarchies
 *
 *  Nadelen:
 *  1: Wanneer de client geen of ongeldige parameters doorgeeft, kan de factory method geen object instantieren
 *
 * */
import { AbstractFactory } from './AbstractFactory';
import { Builder as Elements } from './Builder';

    export class WidgetFactory {

        public static createWidget(platform: string):Elements.DomElement{

            let abstractWidgetFactory: AbstractFactory.AbstractWidgetFactory;
            let span: Elements.DomElement;
            let div: Elements.DomElement;

            if(platform.toLowerCase() === 'ios'){
                abstractWidgetFactory = new AbstractFactory.AndroidWidgetFactory();
                span = abstractWidgetFactory.createSpan('Hello Android!');
                div = abstractWidgetFactory.createDiv(span.toString());

                return abstractWidgetFactory.getWidget(div.toString());
            } else if(platform.toLowerCase() === 'android'){
                abstractWidgetFactory = new AbstractFactory.IosWidgetFactory();
                span = abstractWidgetFactory.createSpan('Hello iOS!');
                div = abstractWidgetFactory.createDiv(span.toString());

                return abstractWidgetFactory.getWidget(div.toString());
            } else {
                return null;
            }

        }

    }


