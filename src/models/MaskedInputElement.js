
import InputElement from './InputElement';
import maskInput from 'vanilla-text-mask';

class MaskedInputElement extends InputElement {
  constructor (element, options) {
    super(element, options);

    const { element: inputElement, options: { mask } } = this;

    this.__mask = maskInput({
      inputElement,
      mask,
      guide: false
    });
  }

  getValue () {
    return this.element.value
      .split('')
      .filter((_, i) => this.options.mask[i] instanceof RegExp)
      .join('');
  }

  setValue (value) {
    const { textMaskInputElement: { update, state } } = this.__mask;

    update(value);
    return state.previousConformedValue;
  }
}

export default MaskedInputElement;
