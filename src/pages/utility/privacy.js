import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar/navbar";
import Footer from "../../component/Footer/footer";

import { MdKeyboardArrowRight, FaArrowRight } from "../../assets/icons/icons";

export default function PagePrivacy() {
  return (
    <>
      <Navbar />

      <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-semibold">
              Política de privacidade
            </h3>
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
              Política de privacidade
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
                <p className="text-slate-400">
                  Bem-vindo ao Compartilhe. Esta página explica nossas políticas
                  sobre a coleta, uso e divulgação de informações pessoais
                  quando você usa nosso serviço.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Informações que Coletamos
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Informações Pessoais: Podemos coletar informações pessoais
                    que você nos fornece, como nome, endereço de e-mail, e
                    outras informações relacionadas a doações.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Informações de Doações: Quando você faz uma doação através
                    do nosso site, podemos coletar informações relacionadas à
                    transação, incluindo o valor da doação e as informações de
                    pagamento.
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Uso das Informações
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Processamento de Doações: Utilizamos as informações
                    fornecidas para processar doações e fornecer confirmações
                    relacionadas.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Compartilhamento de Pedidos de Doações: Seu nome e detalhes
                    do pedido de doação podem ser compartilhados publicamente no
                    site, a menos que você escolha manter a doação como anônima.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Comunicações: Podemos usar suas informações para enviar
                    atualizações sobre o status das doações, informações sobre o
                    site ou para responder a perguntas e solicitações.
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Proteção de Informações
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Segurança: Implementamos medidas de segurança para proteger
                    suas informações contra acesso não autorizado, alteração,
                    divulgação ou destruição.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Retenção: Retemos suas informações enquanto necessário para
                    cumprir os propósitos descritos nesta política, a menos que
                    um período de retenção mais longo seja exigido ou permitido
                    por lei.
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Cookies e Tecnologias Semelhantes
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Cookies: Utilizamos cookies e tecnologias semelhantes para
                    melhorar a experiência do usuário e coletar informações
                    sobre o uso do site.
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Seus Direitos{" "}
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Acesso e Correção: Você tem o direito de acessar e corrigir
                    suas informações pessoais a qualquer momento.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Cancelamento da Assinatura: Você pode optar por não receber
                    nossas comunicações a qualquer momento seguindo as
                    instruções de cancelamento de inscrição fornecidas nos
                    e-mails.{" "}
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Alterações nesta Política de Privacidade{" "}
                </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Atualizações: Podemos atualizar esta política
                    periodicamente. Recomendamos que você revise esta página
                    regularmente para estar ciente de quaisquer alterações.
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">Contato </h5>
                <ul className="list-none space-x-1 text-slate-400 mt-4">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    Dúvidas: Se você tiver dúvidas sobre esta política, entre em
                    contato conosco através do e-mail contato@compartilhe.online
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8"></h5>
                <p className="text-slate-400">
                  Ao utilizar nosso site, você concorda com a coleta e uso de
                  informações de acordo com esta política. Obrigado por
                  contribuir para a nossa causa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
