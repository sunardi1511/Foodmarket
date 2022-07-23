import React, { useState } from 'react';
import TabNabItems from './TabNabItems';
import ListItem from '../ListItem';
import { ILFood1 } from '../../../assets';
import ScrollContainer from 'react-indiana-drag-scroll';



const TabItems = ({ items, activeItems, setActiveItems, children}) => {



    return (
        <div className='bg-white flex  flex-col'>
            <div className='h-9 border-b w-full flex justify-around items-center'>
                {items.map(({ key, tittle }) => (
                    <TabNabItems
                        key={`${key}_${tittle}`}
                        active={key === activeItems}
                        onClick={() => setActiveItems(key)}
                        tittle={tittle}
                    />
                ))}
            </div>
          {children}
        </div>
    );
};

export default TabItems