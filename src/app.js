import { plus } from "./plus.js";
import './style.css'
import rabbit from './images/rabbit.png'

console.log(plus(4,4))

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src="${rabbit}">`
})