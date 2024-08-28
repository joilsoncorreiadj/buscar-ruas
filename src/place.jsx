import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ruas } from './db';
import { FaArrowLeft } from "react-icons/fa6";

function Place() {
    const params = useParams()
    const [rua, setRua] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        init()
    }, [])

    function init() {
        let place = ruas.find((item) => item.id == params.id)
        place = {
            ...place,
            ref: place.ref.split(',')
        }
        console.log(place);

        setRua(place)
        setLoading(false)
    }
    if (loading) return
    return (
        <div className='flex flex-col h-screen max-w-[450px] m-auto bg-fuchsia-600 px-4'>
            <Link to={ "/" } className='my-4'>
                <div className='flex flex-row items-center gap-2 py-2 w-[100px] text-center text-white' >
                    <FaArrowLeft size={ 16 } color='white' /> <span>Voltar</span>
                </div>
            </Link>
            <h2 className='text-2xl text-white font-semibold my-5'>{ rua?.nome }</h2>
            <div className='bg-white rounded-md border border-gray-100 px-3 shadow-md shadow-black/20'>
                <h4 className='text-gray-700 my-3 text-lg font-semibold'>Pontos de referência</h4>
                <ul className='pb-2'>
                    { rua.ref.map((r, idx) => (
                        <li className='py-2 text-gray-500' key={ idx.toString() }>{ r }</li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default Place;