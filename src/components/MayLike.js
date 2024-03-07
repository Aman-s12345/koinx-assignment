import React,{useEffect,useState,useContext} from 'react'
import Carouselele from './diffinfo sep/crousalele';
import { useSelector } from 'react-redux';



function MayLike() {
  const topcoin = useSelector((state) => state.topcoin);
   
    const [database,setDatabase] = useState([]);
    const [count,setCount] = useState(true);
    useEffect( () => {
      setDatabase(topcoin.topcoin);
    } , [topcoin.topcoin])

  return (
     <div className='pl-[6rem] pr-[6rem] bg-white sm:pl-[3rem] sm:pr-[3rem]'>
         <div className='font-bold text-xl pl-[2rem] pt-[4rem]'>You May Also Like</div>
         <Carouselele database = {database}/>
         <div className='font-bold text-xl pl-[2rem]'>Trending Coins</div>
         <Carouselele  database = {database}/>
     </div>

   )
}

export default MayLike
