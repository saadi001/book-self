import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import honorsFirst from "../../../Asset/Image/books/honors books.jpg";
import honorsFourth from "../../../Asset/Image/books/honors fourth.jpg";
import honorsSecond from "../../../Asset/Image/books/honors second.jpg";
import honorsThird from "../../../Asset/Image/books/honors third.jpg";
import HscBooks from "../../../Asset/Image/books/hsc books.jpg";
import SscBooks from "../../../Asset/Image/books/ssc books.jpg";

const Items = () => {
  const [iftarItem, setIftarItem] = useState([]);
  const booksCategories = [
    {
      id: 1,
      itemName: "Honours first year",
      image: honorsFirst,
      details: "You can order first year book of honours first year from here",
      items: [],
    },
    {
      id: 1,
      itemName: "Honours Second year",
      image: honorsSecond,
      details: "You can order first year book of honours second year from here",
      items: [],
    },
    {
      id: 1,
      itemName: "Honours third year",
      image: honorsThird,
      details: "You can order first year book of honours third year from here",
      items: [],
    },
    {
      id: 1,
      itemName: "Honours fourth year",
      image: honorsFourth,
      details: "You can order first year book of honours fourth year from here",
      items: [],
    },
    {
      id: 1,
      itemName: "HSC Books",
      image: HscBooks,
      details: "You can order HSC Books from here",
      items: [],
    },
    {
      id: 1,
      itemName: "SSC Books",
      image: SscBooks,
      details: "You can order SSC Books from here",
      items: [],
    },
  ];

  useEffect(() => {
    fetch("https://foodbyt-backend.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setIftarItem(data));
  }, []);

  return (
    <div id="services" className="py-14">
      <h3 className="text-4xl font-bold text-center mb-14">
        Book{" "}
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EA2A00] relative inline-block">
          <span class="relative text-white">Categories</span>
        </span>
      </h3>
      <div className="border p-4 md:p-8 rounded-md shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {booksCategories?.map((c) => (
            <Link
              key={c._id}
              to={`/`}
              className="p-5 hover:scale-105 duration-200 ease-out cursor-pointer"
            >
              <div className="w-28 md:w-44 h-28 md:h-44  mx-auto ">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={c.image}
                  alt=""
                />
              </div>
              <div className="mt-2 md:mt-3">
                <p className="text-center text-base md:text-xl font-semibold mb-1 md:mb-2 ">
                  {c.itemName}
                </p>
                <p className="text-center text-xs md:text-sm">{c.details}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
