import React,{useRef} from 'react'
import Lottie from "lottie-react";
import animationData from "../../lotties/contact.json"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
const ContactUs = () => {
  const PhoneAnimation =
  useRef < import("lottie-react").LottieRefCurrentProps > null;
  const phoneNumber = "+91 90873 44666"; // Replace with the actual phone number

  const handleCall = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(
        `To make a call, please use a mobile device or copy the number ${phoneNumber}  and paste it into your phone dialer.`
      );
    }
  };

  const wtspNumber = "9087344666"; // Replace with the actual WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${wtspNumber}`, "_blank");
  };
  return (
    <>
    <h1 className='text-4xl mb-10 text-center text-slate-300 bg-stone-700 mx-auto md:w-6/12 Belanosima rounded-full abou py-1'>CONTACT US</h1>
    <div className="md:flex justify-around" id="/contact">
      
      {/* Lottie Animation */}
      <div className="mb-10  w-full  lg:w-4/12 md:w-5/12 md:my-auto  lg:my-auto ">
        <Lottie lottieRef={PhoneAnimation} animationData={animationData} />
      </div>
      {/* Contact Form */}
      <div className=" card-bordered border-slate-400  w-full md:w-5/12 p-2 lg:mt-10 xl:-ms-32 rounded-2xl">
        <div className="card-body">
          <h2 className="ext-xl sm:text-2xl font-bold card-title text-slate-400 mx-auto">CONTACT DETAILS</h2>
          <hr className='text-3xl'></hr>
         <div className='mx-auto mt-5'>
          <div >
            <h2 className="text-xl text-white YsabeauSC">Address : </h2>
            <p className="text-left ml-10 text-md text-white josefin">47-C, 2nd Cross Street, KM Nagar, Thennur, Trichy - 17.</p>
          </div >
          
            <div>
            <h2 className="text-xl text-white YsabeauSC">Email    :  </h2>
             <a href="mailto:santhoshm41525@gmail.com josefin" ><p className='text-blue-600 ml-10'>santhoshm41525@gmail.com</p></a> 
             </div>
             <div>
            <h2 className="text-xl text-white YsabeauSC" >Phone    :  </h2>
            <p className="text-md ml-5 text-green-600 hover:bg-slate-50 hover:text-black w-40 rounded-2xl text-center josefin"    onClick={handleCall}>+91 90873 44666</p>
            </div>
            <div>
            <h2 className="text-xl text-white YsabeauSC ">WhatsApp    :  </h2>
            <p className="text-md ml-5 text-green-600 hover:bg-slate-50 hover:text-black w-40 rounded-2xl text-center josefin"  onClick={handleClick}>+91 90873 44666</p>
            </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs