import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { MdLocationOn, MdOutlineTask } from "react-icons/md";
import { BsCloudUploadFill } from "react-icons/bs";
import Image from "next/image";
const Form1 = ({ page, setPage }) => {
  const [image, setImage] = useState(null);
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
            <MdOutlineTask className="bg-gray-400 rounded-full p-1 mr-2 text-white text-[40px] md:text-[50px]" />
            <p>Register</p>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 md:mr-9 ">
        <div className="p-8 md:px-14  bg-white shadow-md rounded-md h-[78%] md:h-[90%] ">
          <div className="overflow-auto h-[100%] p-8">
            <p className=" text-2xl font-semibold ">Input Data Perusahaan</p>
            <div className=" w-full mt-2">
              <select name="nominal" id="balance" className=" rounded-md p-2 outline-gray-400 w-full outline" required>
                <option hidden>Bidang Usaha</option>
                <option>Apotek</option>
                <option>Klinik</option>
              </select>
              <input type="text" className=" rounded-md p-2 outline outline-gray-400 w-full mt-2 " placeholder="Nama Perusahaan" />
              <input type="text" className=" rounded-md p-2 outline outline-gray-400 w-full mt-2 " placeholder="NPWP Perusahaan" />
              <input type="text" className=" rounded-md p-2 outline outline-gray-400 w-full mt-2 " placeholder="Alamat Sesuai NPWP" />
              <select name="nominal" id="balance" className=" rounded-md p-2 outline-gray-400 w-full outline mt-2" required>
                <option hidden>Provinsi</option>
                <option>Jawa Barat</option>
                <option>DKI Jakarta</option>
              </select>{" "}
              <select name="nominal" id="balance" className=" rounded-md p-2 outline-gray-400 w-full outline mt-2" required>
                <option hidden>Kota/Kabupaten</option>
                <option>Bogor</option>
                <option>Jakarta Utara</option>
              </select>{" "}
              <select name="nominal" id="balance" className=" rounded-md p-2 outline-gray-400 w-full outline mt-2" required>
                <option hidden>Kecamatan</option>
                <option>Ciawi</option>
                <option>Mampang</option>
              </select>
              <input type="text" className=" rounded-md p-2 outline outline-gray-400 w-full mt-2 " placeholder="Kode Pos" />
              <p className=" text-lg mt-1 font-semibold ">Upload Kelengkapan Data</p>
              <div className=" mt-2">
                <div className="flex flex-row items-center gap-2 text-white bg-sky-600 p-2">
                  <GrDocumentText /> <p>NIB*</p>
                </div>
                {image === null ? (
                  <label htmlFor="Nib" className=" cursor-pointer flex flex-col justify-center items-center gap-2 border-black border-2 p-2 h-40">
                    <BsCloudUploadFill className=" text-6xl" /> <p>Unggah NIB Valid</p>
                  </label>
                ) : (
                  <div className=" flex justify-center border-black border-2 ">
                    <Image src={image} alt="Nib" width={150} height={150} />
                  </div>
                )}

                <input
                  accept="image/*"
                  type="file"
                  id="Nib"
                  className="hidden"
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
              <div className=" mt-4">
                <button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                  className=" w-full bg-orange-500 text-white p-2 rounded-md hover:bg-white hover:text-orange-400 hover:border hover:border-orange-400"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
