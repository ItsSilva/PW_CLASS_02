import Card from './components/card/card.js';
import './components/card/card.js'

import Button from './components/button/button.js';
import './components/button/button.js';

import fetchData from './data/data.js';
import './data/data.js';

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    fetchData().then(data => {
      data.forEach(user =>{
        const card = document.createElement('my-card');
        card.setAttribute('name', user.name);
        card.setAttribute('status', user.status);
        card.setAttribute('species', user.species);
        this.shadowRoot.appendChild(card);
      });

    const button = document.createElement('my-button');
    this.shadowRoot.appendChild(button);
        });
    }
}

customElements.define('app-container', AppContainer);