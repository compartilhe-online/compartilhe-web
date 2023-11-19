import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer/footer";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/navbar";
import { MdKeyboardArrowRight } from "../../assets/icons/icons";
import { GetCampaign, GetCampaignTypes } from "../../services/campaign";
import CampaignCard from "../../component/campaignCard";
import { showLoading } from "react-global-loading";
import delay from "../../helpers/delay";

export default function ExploreCampaign() {
  const [selectedType, setSelectedType] = useState(null);
  const [campaign, setCampaign] = useState([]);
  const [campaignTypes, setCampaignTypes] = useState([]);
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    GetCampaignTypes().then((e) => {
      setCampaignTypes(e.data);
    });
    GetCampaign().then((e) => {
      setCampaign(e.data);
      setRawData(e.data);
    });
  }, []);

  const matchType = async (id) => {
    setSelectedType(id);
    showLoading(true);
    await delay(200);
    if (id) {
      setCampaign(rawData.filter((item) => item.type.id === id));
    } else {
      setCampaign(rawData);
    }
    showLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="relative table w-full">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl mt-10 leading-normal font-medium">
              Campanhas em andamento
            </h3>
          </div>
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
          <div className="grid grid-cols-1 items-center gap-[30px]">
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                  <li
                    className={`${
                      selectedType === null ? "active" : ""
                    } inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`}
                    data-group="all"
                    onClick={() => matchType(null)}
                  >
                    Todas
                  </li>
                  {campaignTypes.map((item, index) => {
                    return (
                      <li
                        className={`${
                          selectedType === item.id ? "active" : ""
                        } inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`}
                        data-group="branding"
                        onClick={() => matchType(item.id)}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div
            id="grid"
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 mt-4 gap-[30px]"
          >
            {campaign.map((item, index) => {
              return <CampaignCard item={item} index={index} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
