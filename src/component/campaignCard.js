import { Link } from "react-router-dom";

import image from "../assets/images/noimage.png";

export default function CampaignCard({ index, item }) {
  function handleShare(id) {
    return navigator.share({
      url: window.location.origin + "/detail-campaign/" + id,
    });
  }

  return (
    <div
      key={index}
      className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out"
    >
      <div className="relative">
        <img
          src={item?.photo || image}
          alt=""
          style={{
            minHeight: "216px",
            maxHeight: "216px",
            height: "100%",
            width: "100%",
            maxWidth: "260px",
            objectFit: "cover",
          }}
        />
        <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
          <button
            onClick={() => handleShare(item?.id)}
            className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"
          >
            <i className="mdi mdi-share"></i>
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
          <Link
            to={`/detail-campaign/${item?.id}`}
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Saber mais
          </Link>
        </div>
      </div>

      <div className="p-6 relative">
        <Link
          to={`/detail-campaign/${item?.id}`}
          className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out"
        >
          {item?.name}
        </Link>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
            <span className="block font-semibold text-indigo-600">
              {item?.user.name}
            </span>
          </div>

          {/* <div>
                  <i className="mdi mdi-heart text-red-600"></i>{" "}
                  <span className="text-slate-400">{item.like}</span>
                </div> */}
        </div>
      </div>
    </div>
  );
}
