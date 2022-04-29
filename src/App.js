import { useState } from "react"
import './index.css';
export default function App() {
   
    let [numero, setNumero] = useState(0)

    function aumentar() {
      setNumero(numero +1)
    }
    function diminuir() {
      setNumero(numero -1)
    }
   
   return <section>
      <h1>Contador</h1>
      <p>{numero}</p>
      <button class="button" onClick={diminuir}>menos</button> 
      <button class="button"onClick={aumentar}>mais</button>
    </section>
}