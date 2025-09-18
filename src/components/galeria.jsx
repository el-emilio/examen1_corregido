import foto1 from '../assets/ch1.jpg'
import foto2 from '../assets/ch2.jpg'
import foto3 from '../assets/ch3.jpg'
import foto4 from '../assets/ch4.jpg'
import Rate from './rate.jsx'
import Boton from './promedio.jsx'
import Modal from './modal.jsx'
import Envia from './envia.jsx'

import { useState } from 'react'

function Galeria() {

  const [imagenes, setImages] = useState([
    { id: 1, src: foto1, rate: 0 },
    { id: 2, src: foto2, rate: 0 },
    { id: 3, src: foto3, rate: 0 },
    { id: 4, src: foto4, rate: 0 },
  ]);

  const [modal, setModal] = useState(false);

  const ordenaImagenes = (index, rate) => {
    const imagenesOrdenadas = [...imagenes]
    imagenesOrdenadas[index].rate = rate;
    imagenesOrdenadas.sort((a, b) => b.rate - a.rate)
    setImages(imagenesOrdenadas)
  }

  const [promedio, setPromedio] = useState(0);

  const prom = () => {
    const p = (imagenes[0].rate + imagenes[1].rate + imagenes[2].rate + imagenes[3].rate) / 4;
    console.log(p)
    setModal(true);
    console.log(modal);
    setPromedio(p);
  }

  const reinicia=()=>{
    const newImages=[...imagenes];
    newImages.map((img)=>(img.rate=0));
    setImages(newImages)
  }

  return (
    <>

      <div className="galeria">
        {imagenes.map((img, i) => (

          <div className="scoreCard" key={img.id}>
            <img src={img.src} alt="imagen" className='imagen' />
            <Rate avisarCambio={ordenaImagenes} index={i} />
          </div>

        ))}

        <Boton onClick={prom}>Envia</Boton>

        <Modal modal={modal} onClose={() => setModal(false)}>
          <h2>Calificación de la Galería</h2>
          <p>El promedio de la calificación: {promedio}</p>
          <Envia onClick={reinicia}>Reiniciar</Envia>
        </Modal>



      </div>
    </>
  )
}

export default Galeria
