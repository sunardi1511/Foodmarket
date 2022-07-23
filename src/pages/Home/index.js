import React from 'react'
import { useState } from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import { ILAvatar, ILFood1, ILFood2 } from '../../assets';
import { BottomNav, FoodCard, Header, TabItems, ListItem} from '../../components';

const Home = () => {

  const [activeItems, setActiveItems] = useState(0)
  const [items] = useState([
      { key: 0, tittle: 'New Taste' },
      { key: 1, tittle: 'Populare' },
      { key: 2, tittle: 'Recomended' },
  ]);
  return (
    <div className='w-full flex flex-col max-h-screen'>
      <div className='flex flex-col flex-1 bg-gray-100'>
        <Header tittle="FoodMarket" desc="Let's get some food" withAvatar={ILAvatar} />

        <ScrollContainer horizontal className='h-64 overflow-hidden flex flex-row items-center'>

          <FoodCard image={ILFood1} tittle="Sanggara" star={3} />
          <FoodCard image={ILFood2} tittle="Pisang Ijo" star={5} />
          <FoodCard image={ILFood1} tittle="Barongko" star={4} />
          <FoodCard image={ILFood2} tittle="Bandang-bandang" star={2} />
        </ScrollContainer>
        <TabItems 
        activeItems={activeItems}
        setActiveItems={setActiveItems}
        items={items}
        >
            <ScrollContainer vertical className='List-container home'>
                <ListItem image={ILFood1}
                    tittle="ayam potong + kandang"
                    price="IDR 70.000.000"
                    star={4}
                    page="home"
                />
                <ListItem image={ILFood1}
                    tittle="ayam potong + kandang"
                    price="IDR 70.000.000"
                    star={4}
                    page="home"

                /> <ListItem image={ILFood1}
                    tittle="ayam potong + kandang"
                    price="IDR 70.000.000"
                    star={5}
                    page="home"

                />
            </ScrollContainer>
        </TabItems>
      </div>
      <BottomNav page='home' />
    </div>
  )
}

export default Home