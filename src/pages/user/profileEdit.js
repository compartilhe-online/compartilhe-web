import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/user/profile.jpeg";
import Footer from "../../component/Footer/footer";
import Navbar from "../../component/Navbar/navbar";

import * as Icon from "react-feather";
import { MdKeyboardArrowRight } from "../../assets/icons/icons";
import { UpdateUserProfile } from "../../services/user";
import { ToastContainer, toast } from "react-toastify";
import { showLoading } from "react-global-loading";
import { Upload } from "../../services/upload";

export default function ProfileEdit() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const profilePhoto = profile.photo || image;

  const [file, setFile] = useState(profilePhoto);

  const [uploadFile, setUploadFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(profile);

  function handleUpload(e) {
    if (e.target.files.length !== 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setUploadFile(e.target.files[0]);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    showLoading(true);

    if (uploadFile) {
      const uploadForm = new FormData();

      uploadForm.append("file", uploadFile);
      uploadForm.append("fileName", uploadFile.name);

      await Upload(uploadForm).then(async (e) => {
        updateUser({ ...formData, photo: e.data[0] });
      });
    } else {
      updateUser(formData);
    }
  };

  function updateUser(parsedFormData) {
    return UpdateUserProfile(parsedFormData)
      .then((response) => {
        localStorage.setItem("profile", JSON.stringify(response.data));
        toast("Alterações efetuadas com sucesso!");
        setSubmitting(false);
        setError(null);
      })
      .catch((error) => {
        setSubmitting(false);
        toast.error("Ocorreu um problema. Tente novamente!");
      })
      .finally(() => {
        showLoading(false);
      });
  }

  return (
    <>
      <Navbar />

      <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-medium">
              Editar perfil
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
              <Link to="/home">Minha conta</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
              <Link to="/profile">Editar</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"
              aria-current="page"
            >
              Perfil
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
        <div className="container">
          <div className="grid md:grid-cols-12 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-4">
              <div className="group profile-pic w-[112px]">
                <input
                  id="pro-img"
                  name="profile-image"
                  type="file"
                  className="hidden"
                  onChange={handleUpload}
                />
                <div>
                  <div className="relative h-28 w-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                    <img
                      src={file}
                      className="rounded-full"
                      id="profile-image"
                      alt=""
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/10 transition duration-500"></div>
                    <label
                      className="absolute inset-0 cursor-pointer"
                      htmlFor="pro-img"
                    ></label>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 mt-3">
                Clique para atualizar sua foto. Tamanho recomendado de 400x400.
              </p>
            </div>

            <div className="lg:col-span-9 md:col-span-8">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <h5 className="text-lg font-semibold mb-4">Detalhes:</h5>
                <form onSubmit={handleSubmit}>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                      <label className="form-label font-medium">
                        Nome: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Seu nome"
                        id="fullname"
                        name="name"
                        defaultValue={formData.name}
                        required=""
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="form-label font-medium">
                        E-mail: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Email"
                        name="email"
                        defaultValue={formData.email}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="form-label font-medium">
                        Data de nascimento:{" "}
                      </label>
                      <input
                        name="bornDate"
                        id="bornDate"
                        type="date"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Qual é a sua data de nascimento?"
                        defaultValue={formData.bornDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="form-label font-medium">
                        Profissão:{" "}
                      </label>
                      <input
                        name="occupation"
                        id="occupation"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Qual é a sua profissão?"
                        defaultValue={formData.occupation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mt-5">
                      <label className="form-label font-medium">Bio: </label>
                      <textarea
                        name="biography"
                        id="biography"
                        className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Conte-nos um pouco sobre você"
                        defaultValue={formData.biography}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    value="Salvar informações"
                  />
                </form>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                <h5 className="text-lg font-semibold mb-5 text-red-600">
                  Deletar conta
                </h5>

                <p className="text-slate-400 mb-4">
                  Deseja excluir suas informações?
                </p>

                <Link
                  to="/explore-two"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
