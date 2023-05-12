import React from 'react'

function FormularioCripto({ respuestaMonedas }) {

  return (

    <>
      {respuestaMonedas.precio &&
        <div className='m-auto text-center text-white md:flex md:m-auto'>
          <div className='md:w-1/3 md:text-left'>
            <img className='m-auto' src={`https://www.cryptocompare.com/${respuestaMonedas.imagen}`} alt="" />
          </div>
          <div className='md:w-2/3 md:text-left'>
            <p>La moneda abrio a: {respuestaMonedas.open}</p>
            <p>Precio actual de la moneda: {respuestaMonedas.precio}</p>
            <p>Precio mas alto del dia: {respuestaMonedas.precioAltoDia}</p>
            <p>Precio mas bajo del dia: {respuestaMonedas.precioBajoDia}</p>
          </div>
        </div>
      }
    </>
  )
}

export default FormularioCripto
