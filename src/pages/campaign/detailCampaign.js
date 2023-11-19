import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import image from "../../assets/images/user/profile.jpeg";
import defaultImage from "../../assets/images/noimage.png";

import Footer from "../../component/Footer/footer";
import Navbar from "../../component/Navbar/navbar";
import { BsExclamationOctagon } from "../../assets/icons/icons";
import { GetCampaign, GetCampaignID } from "../../services/campaign";
import CampaignCard from "../../component/campaignCard";

export default function DetailCampaign() {
  const params = useParams();
  const id = params.id;

  const [showModal, setShowModel] = useState(false);
  const [contact, setContact] = useState(false);
  const [isOpenTab, setisOpen] = useState(0);
  const [campaign, setCampaign] = useState();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    GetCampaignID(id).then((e) => {
      setCampaign(e.data);
    });

    GetCampaign().then((e) => {
      setSimilar(e.data);
    });
  }, []);

  const handleTabClick = (index) => {
    setisOpen(index);
  };

  return (
    <div>
      <Navbar />

      <section className="relative table w-full md:pb-24 pb-16 mt-28">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-6 md:col-span-5">
              <div className="sticky top-20">
                <img
                  src={campaign?.photo || defaultImage}
                  className="rounded-md shadow-md dark:shadow-gray-800"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-7">
              <div className="">
                <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                  {campaign?.name}
                </h5>

                <div className="mt-6">
                  <Link
                    onClick={() => setContact(!contact)}
                    data-modal-toggle="modalContact"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    <i className="mdi mdi-phone fs-5 me-2"></i> Entrar em
                    contato
                  </Link>
                </div>

                <div className="grid grid-cols-1 mt-8">
                  <ul
                    className="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                    id="myTab"
                    data-tabs-toggle="#StarterContent"
                    role="tablist"
                  >
                    <li
                      role="presentation"
                      className="md:inline-block block md:w-fit w-full"
                    >
                      <button
                        onClick={() => handleTabClick(0)}
                        className={`${
                          isOpenTab === 0
                            ? "text-white bg-indigo-600 hover:text-white"
                            : ""
                        } px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`}
                      >
                        Detalhes
                      </button>
                    </li>
                    {campaign?.testimonial.length > 0 ? (
                      <li
                        role="presentation"
                        className="md:inline-block block md:w-fit w-full"
                      >
                        <button
                          onClick={() => handleTabClick(2)}
                          className={`${
                            isOpenTab === 2
                              ? "text-white bg-indigo-600 hover:text-white"
                              : ""
                          } px-4 py-2 text-center font-semibold rounded-md w-full  hover:text-indigo-600 transition-all duration-500 ease-in-out`}
                        >
                          Comentários
                        </button>
                      </li>
                    ) : null}
                  </ul>

                  <div id="StarterContent" className="mt-6">
                    {isOpenTab === 0 ? (
                      <div>
                        <div className="grid grid-cols-1">
                          <p className="text-slate-400 mb-4">
                            {campaign?.description ||
                              "Esta campanha não possui descrição"}
                          </p>

                          <h6 className="text-xl font-semibold">Autor</h6>

                          <div className="flex items-center mt-3">
                            <img
                              src={campaign?.user.photo || image}
                              className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800"
                              alt=""
                            />

                            <div className="ms-3">
                              <h6 className="text-lg font-semibold">
                                <Link
                                  to={`/profile/${campaign?.user.id}`}
                                  className="hover:text-indigo-600 duration-500 ease-in-out"
                                >
                                  {campaign?.user.name}
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {isOpenTab === 2 ? (
                      <div>
                        <div className="grid grid-cols-1">
                          {campaign?.testimonial
                            .slice(0, 4)
                            .map((item, index) => {
                              return (
                                <div className="rounded-md shadow dark:shadow-gray-800 p-6">
                                  <div className="flex items-center">
                                    <div className="relative">
                                      <img
                                        src={item.user.photo || image}
                                        className="h-20 w-20 rounded-md shadow-md dark:shadow-gray-800"
                                        alt=""
                                      />

                                      <div className="absolute top-0 start-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                        <i className="mdi mdi-account-check mdi-18px text-green-600"></i>
                                      </div>
                                    </div>
                                    <span className="content ms-3">
                                      <Link
                                        to={`/profile/${item?.user.id}`}
                                        className="hover:text-indigo-600 text-lg block"
                                      >
                                        ${item?.user.name}
                                      </Link>
                                      <span className="text-slate-400 block mt-1">
                                        {item.testimonial}
                                      </span>

                                      <span className="text-slate-400 block mt-1">
                                        {item.createdAt}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Campanhas parecidas
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Pessoas que viram esta campanha também conferiram estas sugestões
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {similar.slice(0, 4).map((item, index) => {
              return <CampaignCard item={item} index={index} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
      {contact ? (
        <div
          id="modalContact"
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center"
        >
          <div className="relative w-full h-auto max-w-md p-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold">
                  Informações de contato
                </h5>
                <button
                  onClick={() => setContact(!contact)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="modalContact"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <form className="text-start">
                  <div className="grid grid-cols-1">
                    <div className="mb-4">
                      <label className="font-semibold" htmlFor="number3">
                        {campaign?.user.name}
                      </label>
                    </div>
                  </div>
                </form>

                <div className="pt-4 border-t dark:border-t-gray-800">
                  <div className="flex justify-between">
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-sm text-indigo-600 font-semibold">
                      {" "}
                      {campaign?.user.email}
                    </p>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="font-semibold text-sm">Telefone</p>
                    <p className="text-sm text-indigo-600 font-semibold">
                      {" "}
                      {campaign?.user.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                  <BsExclamationOctagon className="text-3xl" />

                  <div className="ms-2">
                    <span className="block font-semibold">
                      Este usuário não foi verificado
                    </span>
                    <span className="block"></span>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={
                      "https://api.whatsapp.com/send?phone=55" +
                      campaign?.user.phone +
                      "&text=Estou%20entrando%20em%20contato%20pela%20campanha%20" +
                      campaign?.name
                    }
                    target="_blank"
                    // data-modal-toggle="modalContact"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"
                  >
                    <i className="mdi mdi-whatsapp"></i> Abrir no whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
