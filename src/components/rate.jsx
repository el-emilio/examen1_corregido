import { useState, forwardRef, useImperativeHandle } from "react";
import Star from "./star"

const Rate = forwardRef(({ avisarCambio, index }, ref) => {

  const stars = [1, 2, 3, 4, 5];
  const [reating, setRaiting] = useState(0); //guardar y funcion que guarda valores

  useImperativeHandle(ref, () => (
    { resetear: () => { setRaiting(0) } }
  ))

  const califica=(star) => {
    setRaiting(star)
    avisarCambio(index, star)
  }

  return (
    <>
      <div className="card" >
        <div className="star" >
          {/*stars.map((star,i)=>(
                    <span className= {star<=reating?"activo":"inactivo"} key={i}><a onClick={()=>califica(star)}>{'\u2605'}</a></span>))*/
            stars.map((star, i) => <Star llave={i} key={i} star={star} raiting={reating} avisaRate={califica} />)
          }
        </div>
      </div>
    </>
  )
})

export default Rate