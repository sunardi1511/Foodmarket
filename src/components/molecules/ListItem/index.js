import React from 'react'
import { ICStar } from '../../../assets'

const ListItem = ({ image, tittle, price, star, page,items }) => {
  return (
    <div className='flex flex-row my-2 mx-6 items-center'>
      <img src={image} width={60} height={60} />
      <div className='flex-1 ml-3'>
        <p className='text-base font-normal text-black'>{tittle}</p>
        <p className='text-xs font-normal text-gray-400'>{page === "order" && `${items}`} {price}</p>
      </div>
      <div className='flex flex-row'>
        {page === "home" &&
          [1, 2, 3, 4, 5].map((item) => (
            <ICStar fill={item <= star ? "#ffc700" : "#cacaca"} />
          ))}
        {page === "home" && (
        <p className='text-xs font-normal text-gray-400' >{star}.0</p>

        )}
      </div>
    </div>
  )
}

export default ListItem