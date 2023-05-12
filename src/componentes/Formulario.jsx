import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({ setCriptomonedas }) {

    const [moneda, setMoneda] = useState("")
    const [cripto, setCripto] = useState("")
    const [error, setError] = useState(false)

    const [resultadoCripto, setResultadoCripto] = useState([])

    useEffect(() => {
        const consultaCripto = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resueltado = await respuesta.json()

            const array = resueltado.Data.map((cripto) => {

                const objetoCripto = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return objetoCripto
            })
            setResultadoCripto(array)

        }
        consultaCripto();
    }, [])


    const handSubmit = (e) => {
        e.preventDefault()

        if ([moneda, cripto].includes("")) {
            setError(true)
            return
        } 
        setError(false)
        const monedas = {
            moneda,
            cripto
        }
        setCriptomonedas(monedas)
    }


    return (
        <>

            <div className='py-10 px-5 mt-3 mx-5'>
                <p className='text-white font-bold text-4xl text-center'>Cotiza <span className='text-indigo-400'>Criptononedas</span> al instante</p>

                <form
                    className='mt-12'
                    onSubmit={handSubmit}
                >
                    {error && <Error>Todos los campos son obligatorios</Error>}

                    <label className='mt-10 text-white text-2xl' htmlFor="moneda">Elegi tu Moneda</label>
                    <select
                        value={moneda}
                        onChange={(e) => setMoneda(e.target.value)}
                        className='mt-5 rounded-md p-1 w-full mb-5'
                        id="moneda">

                        <option value="hjacv">Selecione una Moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra Esterlina</option>
                    </select>


                    <label className='mt-10 text-white text-2xl' htmlFor="moneda">Elegi tu Criptomoneda</label>
                    <select
                        value={cripto}
                        onChange={(e) => setCripto(e.target.value)}
                        className='mt-5 rounded-md p-1 w-full'
                        id="moneda">

                        <option value="hjacv">Selecione una Moneda</option>

                        {
                            resultadoCripto.map(cripto => {
                                return <option
                                    key={cripto.id}
                                    value={cripto.id}
                                >{cripto.name}</option>
                            })
                        }

                    </select>

                    <input
                        type='submit'
                        value="Consultar"
                        className='w-full rounded-md mt-6 p-2 text-center text-white bg-indigo-900' />

                </form>

            </div>

        </>

    )
}

export default Formulario

