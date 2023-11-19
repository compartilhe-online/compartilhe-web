import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo_icon_64 from "../../assets/images/logo-light.png";
import AuthUser from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "../../services/profile";
import { showLoading } from "react-global-loading";
import delay from "../../helpers/delay";
export default function AuthLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    showLoading(true);
    setSubmitting(true);

    AuthUser(formData)
      .then(async () => {
        setSubmitting(false);
        setError(null);
        await delay(2000);
        UserProfile();
        await delay(1000);
        navigate("/home");
      })
      .catch(() => {
        setSubmitting(false);

        toast.error("Ocorreu um problema. Tente novamente!");
      })
      .finally(() => {
        showLoading(false);
      });
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link to="/home">
                <img src={logo_icon_64} className="mx-auto" alt="" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      E-mail:
                    </label>
                    <input
                      id="LoginEmail"
                      name="email"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="joao@arte.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Senha:
                    </label>
                    <input
                      id="LoginPassword"
                      name="password"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Sua senha"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex items-center mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="RememberMe"
                      />
                      <label
                        className="form-checkbox-label text-slate-400"
                        htmlFor="RememberMe"
                      >
                        Lembrar
                      </label>
                    </div>
                    <p className="text-slate-400 mb-0">
                      <Link to="/auth-re-password" className="text-slate-400">
                        Esqueceu a senha?
                      </Link>
                    </p>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Login"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Não possui conta?
                    </span>{" "}
                    <Link
                      to="/auth-signup"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Cadastre-se
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
