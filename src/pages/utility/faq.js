import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";

import { MdKeyboardArrowRight, FaArrowRight } from "../../assets/icons/icons";

export default function PageFaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };
  const accordionData = [
    {
      title: "O que é o Compartilhe?",
      content:
        "O Compartilhe é uma plataforma online dedicada a conectar pessoas dispostas a fazer doações ou oferecer ajuda com aqueles que estão em busca de apoio. É um espaço para compartilhar generosidade e solidariedade.",
    },
    {
      title: "Como posso fazer uma doação no Compartilhe?",
      content:
        "Para fazer uma doação, basta criar uma conta no Compartilhe, navegar pelas campanhas disponíveis e escolher aquela que você deseja apoiar. Siga as instruções da campanha para realizar a doação.",
    },
    {
      title:
        "Posso oferecer ajuda de outras formas além de doações financeiras?",
      content:
        "Sim, no Compartilhe você pode oferecer diferentes tipos de ajuda, como doações de alimentos, roupas, tempo voluntário, entre outros. Ao criar uma campanha, especifique o tipo de apoio que você está buscando.",
    },
    {
      title: "Como faço para criar uma campanha no Compartilhe?",
      content:
        "Para criar uma campanha, faça login na sua conta, clique em 'Criar Campanha' e siga as etapas fornecidas. Descreva claramente sua situação, indique o tipo de ajuda necessária e forneça informações relevantes para que outros usuários possam entender e oferecer suporte.",
    },
    {
      title:
        "Posso entrar em contato direto com a pessoa que criou a campanha?",
      content:
        "Sim, o Compartilhe permite que os usuários enviem mensagens diretas uns aos outros. Isso facilita a comunicação para esclarecer dúvidas, combinar detalhes da doação ou oferecer suporte adicional.",
    },
    {
      title: "Como posso acompanhar o impacto das minhas doações?",
      content:
        "Você pode acompanhar o progresso das campanhas e o impacto das doações na seção 'Minhas Doações'. Lá, você encontrará atualizações dos criadores das campanhas e poderá ver como sua contribuição está fazendo a diferença.",
    },
    {
      title: "O Compartilhe cobra alguma taxa pelas transações?",
      content:
        "O Compartilhe está comprometido em manter taxas baixas para maximizar o impacto das doações. Algumas transações podem estar sujeitas a taxas de processamento, que são claramente indicadas durante o processo de doação.",
    },
    {
      title: "Como posso relatar uma campanha suspeita?",
      content:
        "Se você encontrar uma campanha suspeita, por favor, utilize a opção de denúncia disponível no site para informar a equipe do Compartilhe. Isso ajuda a manter a integridade da plataforma e a proteger a comunidade.",
    },
  ];

  return (
    <>
      <Navbar sticky="true" />

      <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-semibold">FAQ</h3>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
              <Link to="/home">compartilhe</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"
              aria-current="page"
            >
              FAQ
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
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                    >
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                            activeIndex === index
                              ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                              : ""
                          }`}
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>{item.title}</span>
                          <svg
                            data-accordion-icon
                            className={`${
                              activeIndex === index
                                ? "rotate-180"
                                : "rotate-270"
                            } w-4 h-4 shrink-01`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      {activeIndex === index && (
                        <div>
                          <div className="p-5">
                            <p className="text-slate-400 dark:text-gray-400">
                              {accordionData[activeIndex].content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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
