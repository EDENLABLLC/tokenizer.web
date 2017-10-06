import CardInputElement from './CardInputElement';

class CardPanElement extends CardInputElement {
  constructor (element, error) {
    super(element, {
      autocomplete: 'cc-pan',
      name: 'pan',
      length: 16,
      mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
      error: error,
    });
  }
}

export default CardPanElement;
