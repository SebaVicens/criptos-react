import { useState, useEffect } from 'react'
import imagenCripto from "./img/imagen-criptos.png"
import './App.css'
import Formulario from './componentes/Formulario'
import FormularioCripto from './componentes/FormularioCripto'

function App() {

  const [criptomonedas, setCriptomonedas] = useState({})

  const [respuestaMonedas, setRespuestaMonedas] = useState({})

  useEffect(() => {

    const consultarApi = async () => {

      const { moneda, cripto } = criptomonedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const monedaConsultada = {
        open: resultado.DISPLAY[cripto][moneda].OPENDAY,
        precio: resultado.DISPLAY[cripto][moneda].PRICE,
        precioAltoDia: resultado.DISPLAY[cripto][moneda].HIGHDAY,
        precioBajoDia: resultado.DISPLAY[cripto][moneda].LOWDAY,
        imagen: resultado.DISPLAY[cripto][moneda].IMAGEURL
      }
      console.log(resultado)
      setRespuestaMonedas(monedaConsultada)

    }
    consultarApi()

  }, [criptomonedas])

  return (


    <div className=' md:flex'>
      <div className='md:mt-10 md:w-2/5 md:ml-40'>
        <img src={imagenCripto}></img>
      </div>

      <div className='md:mt-10 md:w-2/5'>

        <Formulario
          setCriptomonedas={setCriptomonedas}
        />

        <FormularioCripto
          respuestaMonedas={respuestaMonedas}
        />
      </div>
    </div>

  )
}

export default App
