const inputTemplate = window.document.createElement('template')

inputTemplate.innerHTML = `
  <style>
    :host {
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 6px;
    }
    :host([disabled]) {
      background: #ccc;
      opacity: 0.8;
      cursor: not-allowed;
    }
    :host([disabled]) .xw-input {
      cursor: not-allowed;
      pointer-events: none;
    }
    .xw-input {
      padding:0;
      text-align: inherit;
      color: #333;
      border:0;
      outline:0;
      line-height: inherit;
      font-size:inherit;
      font-family:inherit;
      min-width: 0;
      -webkit-appearance: none;
      -moz-appearance: textfield;
      background: none;
      overflow-x: hidden;
      font-size: 12px;
      line-height: 16px;
    }
  </style>
  <input
    class="xw-input"
    value="${this.defaultValue}"
  />
`

class XwInput extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(inputTemplate.content.cloneNode(true))

    this.$input = this._shadowRoot.querySelector('input')

    this.$input.addEventListener('input', e => {
      e.stopPropagation()
      const { target: { value } } = e
      this.dispatchEvent(new CustomEvent('input', { detail: { value } }))
    })

    this.$input.addEventListener('change', e => {
      e.stopPropagation()
      const { target: { value } } = e
      this.dispatchEvent(new CustomEvent('change', { detail: { value } }))
    })
  }

  connectedCallback() {
    this.$input.value = this.defaultValue
  }

  get defaultValue() {
    return this.getAttribute('defaultValue') || ''
  }

  get value() {
    return this.$input.value
  }

  set value(value) {
    this.$input.value = value
  }

  get disabled() {
    return this.getAttribute('disabled')
  }

  set disabled(value) {
    if (value){
      this.setAttribute('disabled', true);
    } else {
      this.removeAttribute('disabled');
    }
  }
  
}

window.customElements.define('xw-input', XwInput)
