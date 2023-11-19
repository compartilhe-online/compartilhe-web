import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import bg from "../../assets/images/company/aboutus.jpg";
import image from "../../assets/images/user/profile.jpeg";
import Moment from "moment";

import Footer from "../../component/Footer/footer";
import Navbar from "../../component/Navbar/navbar";

import { GetUserProfileID } from "../../services/user";
import CampaignCard from "../../component/campaignCard";

export default function Profile() {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState();

  useEffect(() => {
    GetUserProfileID(id).then((e) => {
      setUser(e.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative md:pb-24 pb-16 lg:mt-24 mt-[74px]">
        <div className="lg:container container-fluid">
          <div className="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow dark:shadow-gray-700">
            {/* <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="hidden"
            /> */}
            <div className="relative shrink-0">
              <img
                src={bg}
                className="h-80 w-full object-cover"
                id="profile-banner"
                alt=""
              />
              <div className="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/10 transition duration-500"></div>
              <label
                className="absolute inset-0 cursor-pointer"
                htmlFor="pro-banner"
              ></label>
            </div>
          </div>

          <div className="md:flex justify-center">
            <div className="md:w-full">
              <div className="relative -mt-[60px] text-center">
                <div className="group profile-pic w-[112px] mx-auto">
                  <div>
                    <div className="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                      <img
                        src={user?.photo || image}
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

                <div className="mt-6">
                  <h5 className="text-xl font-semibold">
                    {user?.name}{" "}
                    {user?.verified ? (
                      <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i>
                    ) : null}
                  </h5>
                  <p className="text-slate-400 text-[16px] mt-1">
                    membro desde {Moment(user?.createdAt).format("MM/YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mt-16">
          <div
            id=""
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]"
          >
            {user?.campaign.map((item, index) => {
              return <CampaignCard item={item} index={index} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
