const buttonTemplate = document.createElement('template');

buttonTemplate.innerHTML = `
  <style>
    :host {
      display: inline-block; 
      padding: 5px 15px;
      box-sizing:border-box; 
      border:1px solid var(--borderColor, #ccc); 
      font-size: 14px; 
      color: var(--fontColor,#333);  
      border-radius: var(--borderRadius,.25em); 
      cursor: pointer;
    }
    :host([type="primary"]) {
      background: #409EFF;
      border-color: #409EFF;
      color: #fff;
    }
    :host([type="success"]) {
      background: #67C23A;
      border-color: #67C23A;
      color: #fff;
    }
    :host([type="warning"]) {
      background: #E6A23C;
      border-color: #E6A23C;
      color: #fff;
    }
    :host([type="error"]) {
      background: #F56C6C;
      border-color: #F56C6C;
      color: #fff;
    }
    :host([disabled]) {
      opacity: .5;
      cursor: not-allowed;
    }
    :host([text]) {
      padding: 0;
      border: none;
      background: none;
    }
    :host([text][type="primary"]) {
      padding: 0;
      border: none;
      background: none;
      color: #409EFF;
    }
    :host([text][type="success"]) {
      padding: 0;
      border: none;
      background: none;
      color: #67C23A;
    }
    :host([text][type="warning"]) {
      padding: 0;
      border: none;
      background: none;
      color: #E6A23C;
    }
    :host([text][type="error"]) {
      padding: 0;
      border: none;
      background: none;
      color: #F56C6C;
    }
    .xw-button {
      background:none; 
      outline:0; 
      border:0; 
      width:100%;
      height:100%;
      padding:0;
      user-select: none;
      cursor: unset;
    }
  </style>
  <div
    class="xw-button"
  >
    <slot></slot>
  </div>
`

class XwButton extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(buttonTemplate.content.cloneNode(true))
  }
}

window.customElements.define('xw-button', XwButton)
