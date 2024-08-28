import React from 'react';

// import { Container } from './styles';

function Buscar({onchange}) {
    return (
        <div className='flex flex-col'>
            <label htmlFor="search" className='text-gray-700 font-semibold text-base mb-1'>Buscar</label>
            <input
                type='text'
                id='search'
                placeholder='Digite nome da rua'
                className='h-10 rounded-md px-2 text-sm text-gray-700 outline-none shadow-md shadow-gray-100 border border-gray-200'
                onChange={onchange}
            />
        </div>
    );
}

export default Buscar;