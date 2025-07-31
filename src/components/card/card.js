import Button from '../button/button.js';
import '../button/button.js';
class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['image', 'name', 'status', 'species'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div>
    <div>
    <img src="${this.image}" alt="${this.name}">
      <h2>${this.name}</h2>
      <p>Status: ${this.status}</p>
      <p>Species: ${this.species}</p>
    </div>
    `
    const button = document.createElement('my-button');
    this.shadowRoot.appendChild(button);
  }
}

export default Card;
customElements.define('my-card', Card);