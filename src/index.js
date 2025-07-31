import Card from './components/card/card.js';
import './components/card/card.js'

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
        card.setAttribute('image', user.image);
        card.setAttribute('name', user.name);
        card.setAttribute('status', user.status);
        card.setAttribute('species', user.species);
        this.shadowRoot.appendChild(card);
      });

    
        });
    }
}

customElements.define('app-container', AppContainer);