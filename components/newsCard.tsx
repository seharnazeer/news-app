"use client";
import React, { useState } from "react";
import moment from "moment";
import Popup from "reactjs-popup";
import Detail from "./Detail";
const NewsCard = ({ image, title, description, published_at }: any) => {
  const [display, setdisplay] = useState(false);
  return (
    <div
      className={`flex flex-col ${
        image ? "h-92" : "h-72 justify-center items-center"
      } w-full rounded-xl border dark:border-gray-300 border-zinc-900 `}
    >
      {image ? (
        <img
          className="w-full h-56 object-cover rounded-xl shadow-sm"
          src={image}
        />
      ) : (
        ""
      )}
      <section className="flex p-4 flex-col justify-center">
        <h4 className=" font-bold text-sm">{title}</h4>
        <h4 className="text-[13px]">
          {image ? description.slice(0, 100) : description.substring(0, 200)}
        </h4>
        <div className="flex flex-col justify-between">
          <button
            className="bg-red-600 h-8 pl-2 pr-2 text-white rounded-md"
            onClick={() => setdisplay(true)}
          >
            Read More
          </button>

          <p className="justify-self-end">{moment(published_at).fromNow().toString()}</p>
        </div>
      </section>

      {display ? (
        <div className="z-40 absolute items-center left-6 right-6 top-auto md:left-20 md:right-20 lg:right-1/4 lg:left-1/4 m-auto flex flex-col-reverse">
          <Detail
            title={title}
            image={image}
            description={description}
            published_at={published_at}
          />
          <button
            className=" shadow-2xl shadow-red-100 w-10 h-10 flex justify-center items-center rounded-full text-white bg-red-600 p-2 transition-all animate-bounce font-extrabold text-2xl "
            onClick={() => setdisplay(false)}
          >
            X
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewsCard;
