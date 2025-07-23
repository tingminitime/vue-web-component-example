import { defineCustomElement } from 'vue'
import MyFooter from './components/MyFooter.ce.vue'

const MyFooterElement = defineCustomElement(MyFooter)

export { MyFooterElement }

export function register() {
  window.customElements.define('my-footer', MyFooterElement)
}