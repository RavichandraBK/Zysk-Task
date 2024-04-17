import React from "react";
import sisyphus from '../assets/sisyphusLogo.png'
import prdmanager from '../assets/prdmanager.png'
const Sisphus = () => {
  return (
    <>
      <div className="flex items-center flex-col h-[500px] w-full bg-[#F9FAFB] justify-around">
        <div>
            <img src={sisyphus} alt="" />
        </div>
        <p className="text-3xl font-bold text-center">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
        <img src={prdmanager} alt="" />
        <div>
        <p className="text-md font-extrabold text-center">Candice Wu</p>
        <p className="text-[#475467] text-center">Product Manager, Sisyphus</p>

        </div>
      </div>
    </>
  );
};

export default Sisphus;
