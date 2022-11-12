import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { MdLocationOn, MdOutlineTask } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
const Form2 = ({ page, setPage }) => {
  const [image, setImage] = useState(null);
  const router = useRouter();
  return (
    <div className="flex w-full h-full">
      <div className=" hidden  md:w-1/2  md:flex justify-center mt-2">
        <div className="flex flex-col ">
          <div className=" flex flex-row items-center">
            <MdLocationOn className="bg-blue-500 rounded-full p-1 text-white text-[50px] mr-2" />
            <p className=" font-bold text-lg">Sarana</p>
          </div>
          <div className=" border-l-4 h-10 ml-[23px] border-gray-400"></div>
          <div className=" flex flex-row items-center   ">
            <MdOutlineTask className="bg-blue-500  rounded-full p-1 mr-2 text-white text-[40px] md:text-[50px]" />
            <p className="font-bold text-lg">Register</p>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 md:mr-9 ">
        <div className="p-8 md:px-14  bg-white shadow-md rounded-md  ">
          <div className=" p-8">
            <p className=" text-2xl font-semibold ">Register Akun OLIN</p>
            <div className=" w-full mt-2">
              <input type="email" className=" rounded-md p-2 outline outline-gray-400 w-full mt-3 shadow-md " placeholder="Email*" />
              <input type="password" className=" rounded-md p-2 outline outline-gray-400 w-full mt-3 shadow-md " placeholder="Kata Sandi*" />
              <input type="password" className=" rounded-md p-2 outline outline-gray-400 w-full mt-3 shadow-md " placeholder="Konfirmasi Kata Sandi*" />
              <div className=" flex flex-row items-center gap-2 mt-2">
                <div>
                  <input type="checkbox" className=" checkbox" />
                </div>
                <div>
                  <p>
                    Dengan membuat akun, Anda menyetujui <span className="text-orange-400">Ketentuan Pengguna dan Pemberitahuan Privasi</span> aplikasi OLIN
                  </p>
                </div>
              </div>
              <div className=" mt-4 flex flex-row gap-2">
                <button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                  className=" w-full  text-gray-400 border border-gray-400 hover:bg-gray-600 p-2 rounded-md"
                >
                  Kembali
                </button>
                <button
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                  className=" w-full bg-orange-500 text-white p-2 rounded-md hover:bg-white hover:text-orange-400 hover:border hover:border-orange-400"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
