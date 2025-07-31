class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.liked = false;
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

  handleLike() {
    if (this.liked) {
      this.liked = false;
      this.setAttribute('liked', 'false');
    } else {
      this.liked = true;
      this.setAttribute('liked', 'true');
    }

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <button class="fav-button">${this.liked ? 'Dislike' : 'Like'}</button>
    `

    this.shadowRoot.querySelector('.fav-button').addEventListener('click', () => {
      this.handleLike();
    });
  }
}

export default Button;
customElements.define('my-button', Button);