import React from "react";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "../../assets/icons/icons";

export default function AuthSignupSuccess() {
  return (
    <>
      <section className="relative h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/5">
              <div className="relative overflow-hidden rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                <div className="px-6 py-12 bg-emerald-600 text-center">
                  <BsCheckCircle className=" text-white text-8xl" />
                  <h5 className="text-white text-xl tracking-wide uppercase font-semibold mt-2">
                    Sucesso!
                  </h5>
                </div>

                <div className="px-6 py-12 text-center">
                  <p className="text-black font-semibold text-xl dark:text-white">
                    Parabéns! 🎉
                  </p>
                  <p className="text-slate-400 mt-4">
                    Você foi cadastrado com sucesso. <br /> Aproveite e faça o
                    mundo melhor
                  </p>

                  <div className="mt-6">
                    <Link
                      to="/home"
                      className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigobg-indigo-700 text-white rounded-md"
                    >
                      Continue
                    </Link>
                  </div>
                </div>

                <div className="text-center p-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="mb-0 text-slate-400">
                    © {new Date().getFullYear()} compartilhe. Feito com{" "}
                    <i className="mdi mdi-heart text-red-600"></i>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
