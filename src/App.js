
import './App.css';
import Navbar from './components/Navbar';

import Main from './components/Main';
import Diffinfo from './components/Diffinfo';
import MayLike from './components/MayLike';
import Getstarted from './components/Getstarted';
import { Change_crypto } from './components/Change_crypto';
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addToTopCoin } from './redux/Slice/Topcoin';
import axios from 'axios';


function App() {
  const dispatch = useDispatch();
 
 

  const fetchData = async () => {
    try {                                 
      const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
      const top_data = response.data?.coins ;
      
      dispatch(addToTopCoin(top_data));
   
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
   
    fetchData();

   
    const intervalId = setInterval(fetchData, 10 * 60 * 1000);

    
    return () => clearInterval(intervalId);
  }, []); 

  


  return (
        <div className='w-screen h-screen'>
        <Navbar/>  
        <Change_crypto/>
        <Main />
        <Diffinfo />
        <MayLike/>
        <div className='hidden sm:block md:block'>
          <Getstarted/>
        </div>
       
        </div>
  );
}

export default App;
