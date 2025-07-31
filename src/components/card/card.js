class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'lastname', 'age'];
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
      <h2>${this.name}</h2>
      <p>Last Name: ${this.lastname}</p>
      <p>Age: ${this.age}</p>
    </div>
    `
  }
}

export default Card;
customElements.define('my-card', Card);