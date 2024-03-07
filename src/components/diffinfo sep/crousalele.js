import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowDropUp } from "react-icons/md";
import { useSelector } from "react-redux";

function Crousalele(props) {

  const bitcoin = useSelector((state) => state.bitcoin_details);
  const bitcoin_price = bitcoin.bitcoin.bitcoin_in_usd;

  // Check if bitcoin_price is undefined
  if (bitcoin_price === undefined) {
    return <div>Loading...</div>; // You can replace this with your loading spinner or component
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Carousel
        ssr={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? false : true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        containerStyle={{ background: "transparent" }}
        className="p-5"
      >
        {props.database.map((items, index) => (
          <div className="flex flex-col border-2 m-1 rounded-lg p-4" key={index}>
            <div className="flex gap-2 justify-between mb-3">
              <div className="flex gap-1">
                <div><img src={items.item.thumb} className="w-8 h-8" alt="" /></div>
                <div>{items.item.symbol}</div>
                <div className={`flex bg-[#EBF9F4] h-[50%] p-1 pl-1 pr-2 rounded ${items.item.data.price_change_percentage_24h.usd < 0 ? 'text-red-500   bg-red-50' : 'text-green-500'}`}>
                  <MdArrowDropUp className="text-lg" /><div className="text-xs">{`${items.item.data.price_change_percentage_24h.usd}`.substring(0, 4)}%</div>
                </div>
              </div>
            </div>

            <div className="font-bold">
              {`${items.item.data.price}`.substring(0,4)}
            </div>
            <div className="flex justify-center items-center mt-2"><img src={items.item.data.sparkline} alt="" /></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Crousalele;
