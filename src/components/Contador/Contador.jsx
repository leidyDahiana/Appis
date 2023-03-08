import React, { useState, useEffect } from 'react'

export const Contador = () => {
  const [counter, setConuter] = useState(0)
  const [color, setColor] = useState("verde")
  const [fondo, setFondo] = useState("rosado")
  const [fondoMaine, setFondoMaine] = useState("amarillo")

   useEffect(()=>{
    if (counter < 10 ) {
      setColor("red")

      setFondo("morado")
      setFondoMaine("naranja")
    }else{
      setColor("verde")
      setFondo("rosado")
      setFondoMaine("amarillo")
    }

   },[counter])

  return (
    <>
    <main className={fondoMaine}>


    <div className={fondo}>
        
        <h1 className={color}>{counter}</h1>
        
    

    <div className="button">
        <button onClick={() =>setConuter(counter+1)}>aumentar</button>
        <button onClick={() =>setConuter(0)}>reset</button>
        <button onClick={() =>setConuter(counter-1)}>desaumentar</button>
        
    </div>-
    </div>
    </main>
    </>

   
  )
}
