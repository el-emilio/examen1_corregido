import {useState} from "react";

function Rate({avisarCambio, index}) {

const stars=[1,2,3,4,5];
const [reating, setRaiting]=useState(0); //guardar y funcion que guarda valores

const califica=(star)=>{
  setRaiting(star)
  avisarCambio(index,star)
}

  return (
    <>
        <div className="card" >
            <div className="star" >
                {stars.map((star,i)=>(
                    <span className= {star<=reating?"activo":"inactivo"} key={i}><a onClick={()=>califica(star)}>{'\u2605'}</a></span>
                ))}
            </div>
        </div>   
    </>
  )
}

export default Rate