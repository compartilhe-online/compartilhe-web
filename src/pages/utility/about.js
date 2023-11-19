import React, { useState } from "react";
import { Link } from "react-router-dom";

import ab03 from "../../assets/images/about/ab3.png";
import ab02 from "../../assets/images/about/ab2.png";
import ab01 from "../../assets/images/about/ab1.png";

import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";

import CountUp from "react-countup";
import { MdKeyboardArrowRight, FaRegEnvelope } from "../../assets/icons/icons";

export default function PageAboutus() {
  return (
    <>
      <Navbar sticky="true" />
      <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Quem somos
            </h3>

            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Juntos, construímos uma rede de solidariedade, transformando vidas
              por meio do compartilhamento e da compaixão.
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/home">compartilhe</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Quem somos
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <img src={ab03} className="shadow rounded-md" alt="" />
                    <img src={ab02} className="shadow rounded-md" alt="" />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <img src={ab01} className="shadow rounded-md" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <div className="flex mb-4">
                  <span className="text-indigo-600 text-2xl font-bold mb-0">
                    <CountUp
                      className="counter-value text-6xl font-bold"
                      start={1}
                      end={1599}
                    ></CountUp>
                    +
                  </span>
                  <span className="self-end font-medium ms-2">
                    campanhas concluídas
                  </span>
                </div>

                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  Mas e aí, quem somos?
                </h3>

                <p className="text-slate-400 max-w-xl">
                  Somos o Compartilhe, uma comunidade dedicada a unir corações
                  generosos, conectando pessoas dispostas a oferecer ajuda com
                  aquelas que necessitam.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    <FaRegEnvelope className="me-2 text-sm" /> Fale conosco
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
