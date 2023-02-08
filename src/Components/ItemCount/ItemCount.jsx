import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)

    const sumar = () =>  (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial)  && setContador(contador - 1)


  return (
    <>
        <button className="btn btn-dark mx-2" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-dark mx-2" onClick={() => sumar()}>+</button>

    </>
  )
}