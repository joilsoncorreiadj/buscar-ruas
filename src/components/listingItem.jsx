import React from 'react';
import Item from './item';

// import { Container } from './styles';

function ListingItem({ data }) {
    return (
        <div className='p-4 bg-white rounded-md max-h-[720px] overflow-y-auto shadow-md'>
            { data.length > 0 && (
                data.map((rua) => <Item data={ rua } key={ rua?.id } />)
            ) }

        </div>
    );
}

export default ListingItem;