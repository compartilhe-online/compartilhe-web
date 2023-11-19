import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_icon_64 from "../../assets/images/logo-light.png";
import InputMask from "react-input-mask";
import RegisterUser from "../../services/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TODO: Loading

export default function AuthSignup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    RegisterUser(formData)
      .then((response) => {
        navigate("/auth-signup-success");
        setSubmitting(false);
        setError(null);
      })
      .catch((error) => {
        setSubmitting(false);
        toast.error(error.response.data.message);
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
              <h5 className="my-6 text-xl font-semibold">Cadastre-se</h5>
              <form
                action="auth-signup-success"
                className="text-start"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterName">
                      Nome:
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="João da Silva"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Celular:
                    </label>
                    <InputMask
                      mask="(99) 99999-9999"
                      maskPlaceholder=""
                      name="phone"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="(00) 00000-0000"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      E-mail:
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="joao@estrela.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Senha:
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Insira sua senha"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="AcceptT&C"
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptT&C"
                      >
                        Concordo com os{" "}
                        <Link className="text-indigo-600">
                          Termos e Condições
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value={submitting ? "Enviando..." : "Enviar"}
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Já possui uma conta?{" "}
                    </span>
                    <Link
                      to="/auth-login"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Entre!
                    </Link>
                    <ToastContainer />
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
