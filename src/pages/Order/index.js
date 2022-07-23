import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { ILFood1 } from '../../assets';
import { BottomNav, Gap, Header, ListItem, TabItems } from '../../components'


const Order = () => {
  const [activeItems, setActiveItems] = useState(0)
  const [items] = useState([
    { key: 0, tittle: 'In Progress' },
    { key: 1, tittle: 'Pasr Order' },
  ]);
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1'>
        <Header tittle="Your Orders" desc="Wait for the best meal" />
        <Gap height={24} className="bg-gray-100" />
        <TabItems
          activeItems={activeItems}
          setActiveItems={setActiveItems}
          items={items}></TabItems>

        <ScrollContainer vertical className='List-container order'>
          <ListItem image={ILFood1}
            tittle="ayam potong + kandang"
            price="IDR 280.000.000"
            star={5}
            page='order'
            items="4 items"
          />
        </ScrollContainer>

      </div>
      <BottomNav page='order' />
    </div>
  )
}

export default Order