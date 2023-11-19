import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../../component/Footer/footer";
import Navbar from "../../component/Navbar/navbar";
import { MdKeyboardArrowRight } from "../../assets/icons/icons";
import { GetCampaignTypes, NewCampaign } from "../../services/campaign";
import { ToastContainer, toast } from "react-toastify";
import { showLoading } from "react-global-loading";
import { Upload } from "../../services/upload";
import delay from "../../helpers/delay";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [campaignTypes, setCampaignTypes] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
  });

  const [uploadFile, setUploadFile] = useState(null);

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
        createCampaign({ ...formData, photo: e.data[0] });
      });
    } else {
      createCampaign(formData);
    }
  };

  function createCampaign(parsedFormData) {
    return NewCampaign(parsedFormData)
      .then((response) => {
        navigate(`/detail-campaign/${response?.data.id}`);
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

  useEffect(() => {
    GetCampaignTypes().then((e) => {
      setCampaignTypes(e.data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-medium">
              Crie sua campanha
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
              <Link to="/index-nft">Campanha</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"
              aria-current="page"
            >
              Criar
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
          <div className="md:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
            <div className="lg:w-1/3 md:w-2/5">
              <p className="font-semibold mb-6">
                Adicione uma foto à sua campanha. Caso sua campanha seja para
                doação de um item, poste a foto do mesmo.
              </p>
              {file ? (
                ""
              ) : (
                <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">
                  Suporta JPG, PNG e vídeos MP4. Tamanho máximo 150mb.
                </div>
              )}
              <img
                src={file}
                alt=""
                className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small"
              />
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                hidden
                onChange={(e) => handleUpload(e)}
              />
              <label
                className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mt-6 cursor-pointer"
                htmlFor="photo"
              >
                Upload
              </label>
            </div>

            <div className="lg:w-2/3 md:w-3/5 mt-8 md:mt-0">
              <div className="md:ms-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                      <label className="font-semibold">
                        Nome da campanha<span className="text-red-600">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                        placeholder="Nome da sua campanha"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-12">
                      <label className="font-semibold"> Descrição </label>
                      <textarea
                        name="description"
                        id="description"
                        className="form-input mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                        placeholder="Conte-nos um pouco mais sobre a sua campanha"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <label htmlFor="NftItems" className="font-semibold">
                        Tipo
                      </label>
                      <select
                        name="type"
                        className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                        onChange={handleChange}
                        required
                      >
                        <option></option>
                        {campaignTypes.map((e) => {
                          return <option value={e.id}>{e.name}</option>;
                        })}
                      </select>
                    </div>

                    <div className="col-span-12">
                      <button
                        type="submit"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Criar campanha
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
