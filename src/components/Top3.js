import React from 'react'
import {useState , useEffect} from 'react'

import { MdArrowDropUp } from "react-icons/md";
import { useSelector } from 'react-redux';


function Top3() {
    const topcoin = useSelector((state) => state.topcoin);
   
    const [database,setDatabase] = useState([]);
   
    useEffect( () => {
      setDatabase(topcoin.topcoin.slice(0,3));
    } , [topcoin.topcoin])

    

   

  return (
    <div className='bg-white  mr-[4rem] sm:mr-0 md:mr-0 mt-[1rem]  rounded-2xl p-6 sm:p-4'>
      <div className='font-bold text-md  text-2xl'>
        Trending Coin (24h)
      </div>
        {database.map((items,index) => (
          <div className="flex flex-col  m-1 rounded-lg" key={index}>
          
              <div className=" flex gap-2 justify-between mt-4 font-bold">
                <div className="flex gap-2">
                <div><img src={items.item.thumb} alt=""/></div>
                <div>{items.item.name}</div>
                <div>{`(${items.item.symbol})`}</div>
                </div>
                <div className="flex bg-[#EBF9F4] h-[50%] p-1 pl-1 pr-2  rounded text-[#14B079]">
                  <MdArrowDropUp className="text-lg" /><div className="text-xs">{`${items.item.data.price_change_percentage_24h.usd}`.substring(0,4)}%</div>
                </div>
              </div>
          
          </div>
        ))}
    </div>
  )
}

export default Top3
