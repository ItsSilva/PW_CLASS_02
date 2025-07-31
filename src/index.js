import Card from './components/card/card.js';
import './components/card/card.js'

import data from './data/data.js';
import './data/data.js'

import Button from './components/button/button.js';
import './components/button/button.js';

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach(user => {
      const card = document.createElement('my-card');
      card.setAttribute('name', user.name);
      card.setAttribute('lastname', user.lastname);
      card.setAttribute('age', user.age);
      this.shadowRoot.appendChild(card);
    });

    const button = document.createElement('my-button');
    this.shadowRoot.appendChild(button);
  }
}

customElements.define('app-container', AppContainer);