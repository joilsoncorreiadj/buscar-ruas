import { useState } from 'react';
import Buscar from './components/buscar';
import { ruas } from './db';
import ListingItem from './components/listingItem';
function App() {
  const [list, setList] = useState([])
  function handleBuscar(e) {
    const search = e.target.value
    if (search == '') {
      setList([])
      return
    }
    if (String(search).length >= 3) {
      const find = ruas.filter((item) => {
        const searchLower = search ? search.toLowerCase() : '';

        const itemNameLower = item.nome ? item.nome.toLowerCase() : '';

        return itemNameLower.includes(searchLower)
      });
      if (find.length > 0) {
        setList(find);
      } else {
        setList([])
      }
    }

  }

  return (
    <div
      className='flex flex-col flex-1 bg-gray-50 min-h-screen px-4 w-[420px] m-auto'
    >
      <div className='my-5'>
        <Buscar
          onchange={ (e) => handleBuscar(e) }
        />
      </div>
      { list.length > 0 ? (
        <div>
          <ListingItem data={ list } />
        </div>
      ) : (
        <div className='bg-blue-100 px-3 py-1 rounded-md'>
          <span className='text-gray-500 text-sm'>Utilize o campo acima pra fazer uma busca por uma rua</span>
        </div>
      ) }
    </div>
  );
}

export default App;

