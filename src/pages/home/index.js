import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../../component/Footer/footer";
import CookieModal from "../../component/cookieModal";
import Navbar from "../../component/Navbar/navbar";
import { GetCampaign } from "../../services/campaign";
import * as Icon from "react-feather";
import {
  BiWallet,
  LuImagePlus,
  LuSave,
  FaArrowRight,
} from "../../assets/icons/icons";
import CampaignCard from "../../component/campaignCard";

export default function Index() {
  const [campaign, setCampaign] = useState();

  function handleShare(id) {
    return navigator.share({
      url: window.location.origin + "/detail-campaign/" + id,
    });
  }

  useEffect(() => {
    GetCampaign().then((e) => {
      setCampaign(e.data);
    });
  }, []);

  const aboutData = [
    {
      icon: BiWallet,
      title: "Ofereça ajuda",
      desc: "Utilize nossa plataforma para oferecer qualquer tipo de donativo ou ajuda.",
    },
    {
      icon: LuImagePlus,
      title: "Peça ajuda",
      desc: "Se você está em vulnerabilidade, estamos contigo! Conte-nos um pouco da sua história e um de nossos associados irá ajuda-lo.",
    },
    {
      icon: LuSave,
      title: "Corrente do bem",
      desc: "Se inscreva na nossa newsletter e fique por dentro das mais importantes iniciativas suportadas por nós.",
    },
  ];

  return (
    <>
      <Navbar navJustify="justify-start" />
      <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="absolute inset-0 ltr:bg-[url('../../assets/images/home/hero.png')] rtl:bg-[url('../../assets/images/home/hero-rtl.png')] bg-no-repeat bg-bottom bg-cover"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 items-center mt-10">
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
              Faça a diferença hoje! <br />
              Junte-se a nós para criar um mundo melhor
            </h4>

            <p className="text-lg max-w-xl">
              Se você está em situação de vulnerabilidade e precisa de ajuda,
              clique aqui para solicitar suporte e encontrar solidariedade.
            </p>

            <div className="mt-8">
              <Link
                to="/create-campaign"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                Peça ajuda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {aboutData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                      <Icons className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">
                      {item.title}
                    </Link>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Explorar
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Estas são algumas das iniciativas que estão ativas no momento.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {campaign?.slice(0, 8).map((item, index) => {
              return <CampaignCard item={item} index={index} />;
            })}
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <Link
                to="/explore-campaign"
                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              >
                Explorar
                <FaArrowRight className="ms-2 text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieModal />
    </>
  );
}
