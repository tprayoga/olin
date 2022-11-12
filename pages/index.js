import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Doctor, Logo, wave } from "../assets";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { GrCircleQuestion } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/register");
  };
  return (
    <div>
      <div className=" h-screen w-screen relative p-3 bg-blue-100 overflow-x-hidden">
        <div className=" w-full flex justify-between items-center ">
          <div>
            <Image src={Logo} alt="Olin" width={80} height={80} />
          </div>
          <div className=" flex gap-1 cursor-pointer">
            <GrCircleQuestion className="text-3xl" />
            <p>Pusat Bantuan</p>
          </div>
        </div>
        <div className=" mt-10">
          <p className="font-medium text-3xl md:absolute md:left-28 md:top-32 md:text-5xl">
            Selamat Datang di Solusi <br /> Perangkat Lunak Farmasi
          </p>
          <p className=" mt-1 md:absolute md:left-28 md:top-[230px] md:text-3xl">Sistem Manajemen Apotek Online</p>
        </div>
        <div className=" md:mb-4 md:absolute md:z-20 md:left-[29%] md:bottom-[315px]">
          <p className="font-bold text-lg text-center mt-52 md:mt-[420px] md:text-2xl">Silahkan masuk ke dalam akun anda dan kelola apotek Anda</p>
        </div>
        <div className=" md:w-[350px] md:mx-auto md:absolute md:left-[39%] md:z-20 md:bottom-8">
          <div className=" flex flex-col mt-1">
            <div className="md:my-2">
              <label className=" relative font-bold ml-2 " htmlFor="email">
                EMAIL
                <HiOutlineMail className="text-gray-400 pointer-events-none w-8 h-8 absolute top-11 transform -translate-y-1/2 -left-0" />
                <input type="email" name="email" id="email" className=" w-full border-2 border-gray-300 rounded-md p-2 pl-10" placeholder="Email" required />
              </label>
            </div>
            <div className=" md:my-2">
              <label className=" relative font-bold ml-2" htmlFor="password">
                PASSWORD
                <BiLockAlt className="text-gray-400 pointer-events-none w-8 h-8 absolute top-11 transform -translate-y-1/2 -left-0" />
                <input type="password" name="password" id="password" className=" w-full border-2 border-gray-300 rounded-md p-2 pl-10" placeholder="Password" required />
              </label>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div className=" flex justify-center items-center">
              <input type="checkbox" name="remember" id="remember" className=" mt-2" />
              <label htmlFor="remember" className=" mt-1 ml-1">
                Ingat saya
              </label>
            </div>
            <div className=" mt-2">
              <p className=" text-red-600 cursor-pointer">Lupa Password?</p>
            </div>
          </div>
          <div className=" mt-2">
            <button onClick={handleSubmit} className=" w-full bg-blue-500 text-white rounded-md p-2">
              Masuk
            </button>
          </div>
          <div className=" mt-2">
            <p className=" text-center">
              Belum Registrasi?Silahkan klik <span className=" text-orange-500 cursor-pointer">Daftar</span>
            </p>
          </div>
        </div>
        <div className="hidden md:absolute md:z-10 md:bottom-0 md:left-0 md:w-full md:block">
          <Image src={wave} alt="wave" />
        </div>
        <div className=" absolute top-40 md:z-10 md:-top-4 md:left-[970px] md:w-full md:block">
          <Image src={Doctor} alt="wave" />
        </div>
      </div>
    </div>
  );
}
