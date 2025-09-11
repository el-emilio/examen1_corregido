import foto1 from '../assets/ch1.jpg'
import foto2 from '../assets/ch2.jpg'
import foto3 from '../assets/ch3.jpg'
import foto4 from '../assets/ch4.jpg'
import Rate from './rate.jsx'
import Boton from './promedio.jsx'

import { useState } from 'react'

function Galeria() {

    const [imagenes, setImages]=useState([
      {id:1, src:foto1,rate:0},
      {id:2, src:foto2,rate:0},
      {id:3, src:foto3,rate:0},
      {id:4, src:foto4,rate:0},
      ]);

      const ordenaImagenes= (index, rate)=>{
        const imagenesOrdenadas=[...imagenes]
        imagenesOrdenadas[index].rate=rate;
        imagenesOrdenadas.sort((a,b)=>b.rate-a.rate)
        setImages(imagenesOrdenadas)
      }

    const prom=()=>{
     
      console.log( (imagenes[0].rate+imagenes[1].rate+imagenes[2].rate+imagenes[3].rate)/4)
    }

  return (
    <>
    
    <div className="galeria">
      {imagenes.map((img, i)=>(
        
        <div className="scoreCard" key={img.id}>
        <img  src ={img.src} alt="imagen" className='imagen'/>
        <Rate avisarCambio={ordenaImagenes} index={i}/>
        </div>

      ))}
        
      <Boton onClick={prom}/>

    </div>
    </>
  )
}

export default Galeria
