import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";
import { useEffect, useState } from "react";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  //Heart Icon States And Putting Into Local Storage
  const [selected, setSelected] = useState(() => {
    const initalSelected = localStorage.getItem("selected");
    if (initalSelected) {
      return JSON.parse(initalSelected);
    } else {
      return news.map(() => false);
    }
  });

  //state variable "likes" that keeps track of the number of likes for each news item.
  const [likes, setLikes] = useState(() => {
    const initialLikes = localStorage.getItem("likes");
    if (initialLikes && initialLikes !== "undefined" && news) {
      return JSON.parse(initialLikes);
    } else if (news) {
      return news.map((val) => val.likes); //<----
    }
    return [];
  });

  //Setting every item in the local storage
  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [selected, likes]);

  //Making sure it wont go below 0
  //Making sure to return the new state
  function handleClick(i) {
    setSelected((prevSelected) => {
        const newSelected = [...prevSelected];
        newSelected[i] = !prevSelected[i];
        return newSelected;
    });
    setLikes((prevLikes) => {
        const newLikes = [...prevLikes];
        newLikes[i] = selected[i] ? prevLikes[i] - 1 : prevLikes[i] + 1;
        return newLikes;
    });

    // update the like count in the news array
    const newNews = [...news];
    newNews[i].like = newlikes[i];
    setNews(newNews);
}

  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img
                    src={val.img}
                    alt={`img/story/${i}`}
                    className="w-fill h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex items-center justify-between ml-3">
                  <div className="flex items-center">
                    <HeartIcon
                      className={`icon-style ${
                        selected[i] ? "text-red-500" : "text-gray-500"
                      }`}
                      onClick={() => handleClick(i)}
                    />
                    <span className="mr-2">{likes[i]}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">{val.by}</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{truncate(val.text, {length: 175})}</p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a href={val.url} target="_blank" role={"button"} className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">{val.btn}</a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
  );
};
export default Stories;
