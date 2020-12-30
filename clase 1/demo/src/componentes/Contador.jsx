import React from "react"

const Contador = () =>{
  const [contador, setContador] = useState(0)
  const aumentarContador = () => setContador(contador + 1)
  const disminuirContador = () => setContador(contador - 1)
  const resetearContador = () => setContador(0)
  
  return(
      <div>
        <p> El contador va: {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={disminuirContador}>-</button>
        <button onClick={resetearContador}>Resetear</button>
      </div>
  )}

  export default Contador