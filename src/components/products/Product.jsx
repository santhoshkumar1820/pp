import React from "react";
import "./Product.css";
import Call from "./Call";

const Product = () => {
  return (
    <div>
      <div className="bn5 w-10/12 mx-auto lg:m-3 mt-5">
        <figure className="p-2 px-4">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.EzGPu3vUTXeP00NfLCbY9wHaHa&pid=Api&P=0&h=180"
            alt="Shoes"
            className="rounded-xl w-full h-48 md:h-56 bg-transparent img "
          />
        </figure>
        <div className="p-2">
          <h2 className="text-2xl pop ml-2">Battery</h2>
          <hr className="w-full mx-auto my-1"></hr>
          <p className="my-2 ml-2 text-lg YsabeauSC ">Brands:</p>
          <div className=" ml-5 -mt-2 grid grid-cols-2 gap-1 pop">
            <p className="text-blue-400 hover:text-yellow-300 ">brand 1</p>
            <p className="text-blue-400 hover:text-yellow-300 ">brand2</p>
            <p className="text-blue-400 hover:text-yellow-300 ">brand 3</p>
          </div>
          <hr className="w-11/12 mx-auto my-2"></hr>
          <div className="  w-9/12  mx-auto grid grid-cols-2 pl-2 ">
            <button
              className="m-2  w-10/12 text-center  py-2  bn23 hover:text-black"
              onClick={() => document.getElementById("contact").showModal()}
            >
              Buy
            </button>

            <button
              className="m-2  w-10/12 text-center py-2   bn24 hover:text-black "
              onClick={() => document.getElementById("contact").showModal()}
            >
              service
            </button>
            <dialog id="contact" className="modal">
              <Call />
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
