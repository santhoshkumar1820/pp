import React,{useRef} from 'react'
import Lottie from "lottie-react";
import animationData from "../../lotties/ppp1.json"

import './Home1.css'
const Home1 = () => {
    const HomeAnimation =
    useRef < import("lottie-react").LottieRefCurrentProps > null;
  return (
    
    <div
      className="mt-20 justify-center md:flex md:justify-around text-white hide-overflow "
      id="/"
    >
      <div
        className="font-extrabold text-center mx-5  mt-7 md:text-left md:my-auto lg:mt-44 md:ml-16 text-3xl xl:text-6xl "

      >
         
        <p className="">
          <span className="block lg-inline ubuntu lg:mt-16">PACIFIC POWERPLANT</span>
        </p>
        <div
          className="text-xl  mt-3 ms-2 animate__animated animate__fadeInUp animate__delay-1s animate_slower pop"

        >
            A Smart Choice is making your own electricity
        </div>
      </div>
      <div className=" w-full md:w-5/12 lg:-ms-24 -mt-10  ">
        <Lottie lottieRef={HomeAnimation} animationData={animationData} />
      </div>
    </div>

  )
}

export default Home1