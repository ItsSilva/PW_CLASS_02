class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.count = 0;
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

  handleCount() {
    this.count++;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <button class="counter">Count: ${this.count}</button>
    `

    this.shadowRoot.querySelector('.counter').addEventListener('click', () => {
      this.handleCount();
    });
  }
}

export default Button;
customElements.define('my-button', Button);