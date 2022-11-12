import Image from "next/image";
import React, { useState } from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { Logo } from "../../assets";
import Form1 from "../../components/regis/Form1";
import Form2 from "../../components/regis/Form2";

const index = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Form1 page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <Form2 page={page} setPage={setPage} />;
    }
  };

  return (
    <div className=" w-screen h-screen bg-slate-100 overflow-hidden">
      <div>
        <div className=" w-full flex justify-between items-center p-3 bg-white shadow-md">
          <div>
            <Image src={Logo} alt="Olin" width={80} height={80} />
          </div>
          <div className=" flex gap-1 cursor-pointer">
            <GrCircleQuestion className="text-3xl" />
            <p>Pusat Bantuan</p>
          </div>
        </div>
      </div>
      <div className=" p-3 mt-2">{PageDisplay()}</div>
    </div>
  );
};

export default index;
