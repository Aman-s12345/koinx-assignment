import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToPerformance } from '../../redux/Slice/Performance';
import { useEffect } from 'react';



function Fundamentals() {
  const performance = useSelector((state) => state.performance);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Bitcoin data
        const coinResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false',
          {}
        );
        
        const bitcoin_price = await coinResponse.data.market_data.current_price.usd;

        const low_24 = await coinResponse.data.market_data.low_24h.usd;
        const high_24 = await coinResponse.data.market_data.high_24h.usd;
        const low_7d = await ((coinResponse.data.market_data.price_change_percentage_7d) * low_24) / 100;
        const high_7d = await ((coinResponse.data.market_data.price_change_percentage_7d) * high_24) / 100;
        const trading_volume = await coinResponse.data.market_data.total_volume.usd;
        const market_cap_rank = await coinResponse.data.market_cap_rank;
        const market_cap = await coinResponse.data.market_data.market_cap.usd;
        const market_cap_dominance = await coinResponse.data.market_data.market_cap_fdv_ratio;
        const volume = trading_volume / market_cap;
        const ath_value = await coinResponse.data.market_data.ath.usd;
        const ath_rate = await coinResponse.data.market_data.ath_change_percentage.usd;
        const ath_date = await coinResponse.data.market_data.ath_date.usd;
        const atl_value = await coinResponse.data.market_data.atl.usd;
        const atl_rate = await coinResponse.data.market_data.atl_change_percentage.usd;
        const atl_date = await coinResponse.data.market_data.atl_date.usd;
        dispatch(addToPerformance([{
          "bitcoin_price": { bitcoin_price },
          "low_24": { low_24 },
          "high_24": { high_24 },
          "low_7d": { low_7d },
          "high_7d": { high_7d },
          "trading_volume": { trading_volume },
          "market_cap_rank": { market_cap_rank },
          "market_cap": { market_cap },
          "market_cap_dominance": { market_cap_dominance },
          "volume": { volume },
          "ath_value": { ath_value },
          "ath_rate": { ath_rate },
          "ath_date": { ath_date },
          "atl_value": { atl_value },
          "atl_rate": { atl_rate },
          "atl_date": { atl_date }

        }]))





        // Fetch data for the specified coinId

      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts


  }, []);

  const ans = performance?.performance;
  console.log(ans);


  return (

    <div>
      <div className='flex flex-row gap-4 '>
        <h1 className='text-xl font-bold'>Fundamentals</h1><FaInfoCircle className='mt-auto mb-auto' />
      </div>
      <div className='flex justify-around mt-6 sm:flex-col md:flex-col'>
        <div className='flex flex-col justify-center w-[47%] sm:w-auto md:auto'>
          <div className='flex justify-around border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>Bitcoin Price</div>
            <div className='flex w-[50%] justify-end  font-semibold'>${ans[0]?.bitcoin_price?.bitcoin_price}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>24h Low / 24h High</div>
            <div className='flex w-[50%] justify-end font-semibold'>${ans[0]?.low_24?.low_24} / ${ans[0]?.high_24.high_24}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>7d Low / 7d High</div>
            <div className='flex w-[50%] justify-end font-semibold'>${ans[0]?.low_7d.low_7d.toString().substring(0, 7)} / ${ans[0]?.high_7d.high_7d.toString().substring(0, 7)}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>Trading Volume</div>
            <div className='flex w-[50%] justify-end font-semibold'>${ans[0]?.trading_volume.trading_volume}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>Market Cap Rank</div>
            <div className='flex w-[50%] justify-end font-semibold'>#{ans[0]?.market_cap_rank.market_cap_rank} </div>
          </div>
        </div>
        <div className='flex flex-col justify-center w-[47%] sm:w-auto md:auto'>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>Market Cap</div>
            <div className='flex w-[50%] justify-end font-semibold'>${ans[0]?.market_cap.market_cap}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%] sm:w-[70%]'>Market Cap Dominance</div>
            <div className='flex w-[50%] sm:w-[30%] justify-end font-semibold'> {ans[0]?.market_cap_dominance.market_cap_dominance}%</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>Volume / Market Cap</div>
            <div className='flex w-[50%] justify-end font-semibold'>{ans[0]?.volume.volume}</div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>All-Time High</div>
            <div className='flex flex-col w-[50%] justify-end'>

              <div className='flex flex-row gap-1 '>
                <div className='font-semibold'>${ans[0]?.ath_value.ath_value} </div>
                <div className={` ${ans[0]?.ath_rate.ath_rate < 0 ? 'text-red-500   ' : 'text-green-500'}`}>{ans[0]?.ath_rate.ath_rate}%</div>

              </div>
              <div>
              {new Date(ans[0]?.ath_date.ath_date).toLocaleDateString()}
              </div>

            </div>
          </div>
          <div className='flex justify-around  border-b-2 pb-2 pt-2 text-sm h-[50px]'>
            <div className='flex w-[50%]'>All-Time Low</div>
            <div className='flex flex-col w-[50%] h-[40px] justify-end'>

              <div className='flex flex-row gap-1 h-[50%]'>
                <div className='font-semibold' >${ans[0]?.atl_value.atl_value}</div>
                <div className={` ${ans[0]?.atl_rate.atl_rate < 0 ? 'text-red-500   ' : 'text-green-500'}`}>{ans[0]?.atl_rate.atl_rate}%</div>

              </div>
              <div className="h-[50%]">
              {new Date(ans[0]?.atl_date.atl_date).toLocaleDateString()}
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Fundamentals
