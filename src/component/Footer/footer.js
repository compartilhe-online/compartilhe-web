import React, { useState } from "react";
import logo_light from "../../assets/images/logo-light.png";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { showLoading } from "react-global-loading";
import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
  PiShoppingCart,
  MdKeyboardArrowRight,
} from "../../assets/icons/icons";
import { Subscribe } from "../../services/newsletter";
export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    showLoading(true);

    Subscribe(formData.email)
      .then(async () => {
        toast.success("Cadastrado com sucesso!");
      })
      .catch(() => {
        toast.error("Ocorreu um problema. Tente novamente!");
      })
      .finally(() => {
        showLoading(false);
      });
  };
  const footerLinks = [
    {
      liClass: "",
      route: "/faq",
      title: "FAQ",
    },
    {
      liClass: "mt-[10px]",
      route: "/privacy",
      title: "Política de privacidade",
    },
    {
      route: "/status",
      title: "Status",
      liClass: "mt-[10px]",
    },
  ];
  const footerCompany = [
    {
      liClass: "",
      route: "/about",
      title: "Sobre nós",
    },
    {
      route: "/auth-login",
      title: "Login",
      liClass: "mt-[10px]",
    },
  ];
  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link to="/#" className="text-[22px] focus:outline-none">
                      <img src={logo_light} alt="" />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      Junte-se a nós nesta jornada de compaixão e generosidade.
                      No compartilhe, acreditamos que, juntos, podemos criar um
                      mundo melhor, um ato de doação de cada vez. Obrigado por
                      fazer parte dessa causa.
                    </p>
                    <ul className="list-none mt-5 space-x-1 space-y-1">
                      <li className="inline">
                        <Link
                          to=""
                          target="_blank"
                          className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaLinkedin className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          to=""
                          target="_blank"
                          className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaInstagram className="text-sm" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      compartilhe
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            to={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Links úteis
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            to={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out inline-flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Newsletter
                    </h5>
                    <p className="mt-6">
                      Se inscreva e fique por dentro das novidades
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1">
                        <div className="foot-subscribe my-3">
                          <label className="form-label">
                            Entre com seu e-mail{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4" />

                            <input
                              type="email"
                              className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0"
                              placeholder="Email"
                              name="email"
                              required=""
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                        >
                          Inscrever
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  © {new Date().getFullYear()} compartilhe. Feito com{" "}
                  <i className="mdi mdi-heart text-red-600"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
