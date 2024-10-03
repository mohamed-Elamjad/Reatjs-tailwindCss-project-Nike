import { useState } from "react"
import Btn from "../Components/Btn"
import ShoeCard from "../Components/ShoeCard"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [ShoeImage,setShoeImage]=useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col
    justify-center gap-10 min-h-screen max-container
    ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full 
      max-xl:padding-x pt-28
      " >
        {/* -- title and text  and btn */}
        <p  className="text-xl font-montserrat text-coral-red">
        Our Summer collections
        </p>
        <h1  className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p  className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Btn  label='shop now' iconURL={arrowRight}/>
        {/* -- status in sit web */}
        <div className="flex justify-center items-center flex-wrap w-full  gap-16  mt-20">
          {
            statistics.map((item,index)=>(
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{item.value}</p>
                <p  className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* -- imgs and change imgs */}
      <div  className="relative flex-1 flex justify-center items-center
      bg-primary xl:min-h-screen max-xl:py-40
      bg-hero bg-cover bg-center
      ">
      <img src={ShoeImage} alt="shoe  collection" 
      width={610}
      height={502}
      className="object-contain relative z-10"
      />
      {/* --  click and change imgs */}
      <div  className=" 
      flex  sm:gap-6 gap-4 absolute -bottom-[5%]
      sm:left-[10%] max-sm:px-6
      ">
        {
          shoes.map((item)=>(
            <div key={item}>
              <ShoeCard  
              // item img
              item={item}
              //value useState
              ShoeImage={ShoeImage}
              // set value useState
              changeImage={(item)=>setShoeImage(item)}
              />
            </div>
          ))
        }
      </div>
      </div>
    </section>
  )
}
export default Hero