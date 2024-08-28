import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Item({ data }) {
    const { nome, ref, id } = data
    const listRef = ref.split(',')

    return (
        <li className='list-none py-3 border-b border-gray-100'>
            <Link to={ `/place/${id}` }>
                <div className='flex flex-row justify-between items-center'>
                    <h4 className=' text-gray-500'>{ nome }</h4>
                    <span className='text-xs bg-fuchsia-700 rounded-2xl px-3 py-1 text-white'>{ listRef.length } Referência</span>
                </div>
                
            </Link>
        </li >
    );
}

export default Item;