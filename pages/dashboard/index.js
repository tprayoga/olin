import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../../assets";
import { HiHome, HiOutlineUserCircle } from "react-icons/hi";
import { BiCart, BiHome, BiUser } from "react-icons/bi";
import { BsBag, BsBagXFill, BsBox, BsBoxArrowInUp, BsFillBarChartFill, BsThreeDotsVertical } from "react-icons/bs";
import { GrCircleQuestion } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { TbUserCircle } from "react-icons/ti";
import { RiArrowUpSLine, RiHandCoinLine } from "react-icons/ri";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const Sidebare = () => {
  const { collapseSidebar } = useProSidebar();
  const [collapseSideBare, setCollapseSideBar] = useState(false);
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 720) {
      setCollapseSideBar(true);
      collapseSidebar(true);
    }
  }, [size.width, collapseSidebar]);
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dataTable = [9, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataTable,
        backgroundColor: dataTable.map((item) => (item > 110 ? "orange" : "blue")),
        stack: "Stack 0",
      },
    ],
  };

  const dataDoughnut = {
    labels: ["offline", "AloDoc", "Halodoc", "Shopee", "grabHealth", "Tokopedia", "SehatQ"],

    datasets: [
      {
        label: "# of Votes",
        data: [40, 10, 20, 10, 4, 6, 10],
        backgroundColor: ["#0008C1", "#3C4048", "#CF0A0A", "#FF6D28", "#00F5FF", "#A8E890", "#EAEAEA"],
      },
    ],
  };
  const optionsDoughnut = {
    animation: true,
    responsive: false,
    layout: {
      padding: {
        bottom: 0,
      },
    },
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: "white",
        font: {
          weight: "bold",
          size: 16,
        },
        padding: 0,
        formatter: (value) => {
          return value + "%";
        },
      },
    },
  };

  return (
    <div className="flex  w-screen h-screen bg-slate-100 ">
      <div className=" flex flex-col">
        <div className="flex flex-row justify-between items-center p-3 pb-10 bg-white">
          <Image src={Logo} width={37} height={37} alt="logo" />
          <GiHamburgerMenu className="hidden md:inline-block cursor-pointer text-xl" onClick={() => collapseSidebar()} />
        </div>
        <Sidebar backgroundColor="#ffff" className=" h-screen">
          <Menu>
            <MenuItem icon={<BiHome size="1.5rem" />}> Homepage</MenuItem>
            <MenuItem icon={<BsBag size="1.5rem" />}> Sales</MenuItem>
            <MenuItem icon={<BsBox size="1.5rem" />}> Inventory</MenuItem>
            <MenuItem icon={<BiCart size="1.5rem" />}> Purchase</MenuItem>
            <MenuItem icon={<BiUser size="1.5rem" />}> User Managent</MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <div className="w-full flex flex-col h-full overflow-hidden">
        <div>
          <div className=" w-full flex justify-between items-center p-3 bg-white shadow-md">
            <div></div>
            <div className=" flex gap-3 cursor-pointer">
              <GrCircleQuestion className="text-3xl" />
              <AiOutlineMail className="text-3xl" />
              <HiOutlineUserCircle className="text-3xl" />
              <div>
                <p className="text-sm">Hi, John Doe</p>
                <p className="text-xs">Owner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full p-5 gap-5 overflow-auto ">
          <p className="text-[1.5rem] font-semibold">Order Statistic</p>

          <div className="flex flex-col md:flex-row gap-5">
            <div className=" bg-white shadow-lg rounded-md flex  gap-5 py-2 px-10">
              <div className=" flex flex-col gap-3">
                <p className=" font-medium">Total Selling</p>
                <p className=" text-2xl font-semibold">800</p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <RiArrowUpSLine className="text-3xl text-blue-500" />
                <p className="text-blue-500">20,5 %</p>
              </div>
            </div>
            <div className=" bg-white shadow-lg rounded-md flex  gap-5 py-2 px-10">
              <div className=" flex flex-col gap-3">
                <p className=" font-medium">Expired inventory</p>
                <p className=" text-2xl font-semibold">5</p>
              </div>
            </div>{" "}
            <div className=" bg-white shadow-lg rounded-md flex  gap-5 py-2 px-10">
              <div className=" flex flex-col gap-3">
                <p className=" font-medium">Out of stock inventory</p>
                <p className=" text-2xl font-semibold">12</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between w-full  ">
            <div className="w-full md:w-2/3  h-full ">
              <div className="w-full rounded-md shadow-lg bg-white p-2 relative">
                <div className=" dropdown absolute right-3 p-3 cursor-pointer hover:bg-slate-100 hover:rounded-md">
                  <BsThreeDotsVertical tabIndex={0} className=" text-2xl text-gray-700" />
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a>Edit </a>
                    </li>
                    <li>
                      <a>Delete</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-[1.5rem] font-semibold p-3">Sales & Purchase</p>
                </div>
                <Bar options={options} data={data} />
                <div className="w-full flex justify-center py-6">
                  <div className=" grid grid-cols-4 gap-4 w-full  ">
                    <div className=" flex flex-col  items-center hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <p className=" font-semibold">Target</p>
                      <div className="flex flex-row gap-1 items-center text-teal-400">
                        <MdOutlineArrowDropUp className=" text-4xl " />
                        <p>231</p>
                      </div>
                    </div>
                    <div className=" flex flex-col  items-center hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <p className=" font-semibold">Last Week</p>
                      <div className="flex flex-row gap-1 items-center text-red-400">
                        <MdOutlineArrowDropDown className=" text-4xl " />
                        <p>224</p>
                      </div>
                    </div>{" "}
                    <div className=" flex flex-col  items-center hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <p className=" font-semibold">Last Mounth</p>
                      <div className="flex flex-row gap-1 items-center text-teal-400">
                        <MdOutlineArrowDropUp className=" text-4xl " />
                        <p>2132</p>
                      </div>
                    </div>{" "}
                    <div className=" flex flex-col  items-center hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <p className=" font-semibold">This Year</p>
                      <div className="flex flex-row gap-1 items-center text-teal-400">
                        <MdOutlineArrowDropUp className=" text-4xl " />
                        <p>8123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  flex-col h-full w-full mt-2 md:w-[30%] gap-[2%]">
              <div className="w-full h-[32%] bg-white shadow-lg rounded-md px-5 py-2 flex flex-row justify-between items-center">
                <div>
                  <BsFillBarChartFill className=" text-6xl text-blue-500" />
                </div>
                <div className=" flex flex-col justify-end items-end">
                  <p className=" font-semibold text-lg">Total Transaksi</p>
                  <p className=" font-semibold text-2xl">Rp.80.000.000</p>
                </div>
              </div>
              <div className="w-full h-[32%] bg-white shadow-lg rounded-md px-5 py-2 flex flex-row justify-between items-center">
                <div>
                  <IoNewspaperOutline className=" text-6xl text-blue-500" />
                </div>
                <div className=" flex flex-col justify-end items-end">
                  <p className=" font-semibold text-lg">Sales</p>
                  <p className=" font-semibold text-2xl">289</p>
                </div>
              </div>{" "}
              <div className="w-full h-[32%] bg-white shadow-lg rounded-md px-5 py-2 flex flex-row justify-between items-center">
                <div>
                  <RiHandCoinLine className=" text-6xl text-blue-500" />
                </div>
                <div className=" flex flex-col justify-end items-end">
                  <p className=" font-semibold text-lg">Purchase</p>
                  <p className=" font-semibold text-2xl">289</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:justify-between">
            <div className="bg-white shadow-lg rounded-md p-3 px-10 w-full md:w-1/3  relative">
              <div className=" dropdown absolute right-3 p-3 cursor-pointer hover:bg-slate-100 hover:rounded-md">
                <BsThreeDotsVertical tabIndex={0} className=" text-lg text-gray-700" />
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Edit </a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
              <p className="text-[1.5rem] font-semibold mb-2">Inventory</p>
              <div className=" flex justify-between mb-1 ">
                <p>New Order</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">3</p>
              </div>
              <div className=" flex justify-between mb-1 ">
                <p>Prepare Order</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">5</p>
              </div>{" "}
              <div className=" flex justify-between mb-1 ">
                <p>Waiting Pickup</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">12</p>
              </div>{" "}
              <div className=" flex justify-between mb-1 ">
                <p>Sent</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">9</p>
              </div>{" "}
              <div className=" flex justify-between mb-1 ">
                <p>Cancel</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">7</p>
              </div>{" "}
              <div className=" flex justify-between mb-1 ">
                <p>Done</p>
                <p className=" w-7 h-7 bg-sky-300 rounded-md shadow-sm text-center">5</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-md h-full p-3 mt-2 md:mt-0  ">
              <p className="text-lg font-semibold mb-2">Presentase Penjualan Obat</p>
              <div className=" ">
                <Doughnut data={dataDoughnut} options={optionsDoughnut} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebare;
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
