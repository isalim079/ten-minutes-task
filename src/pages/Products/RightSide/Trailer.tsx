import { useState } from "react";
import type { Checklist, Medium } from "../../../types/product";
import PlayIcon from "../../../assets/icons/playIcon.svg?react";
import LeftIcon from "../../../assets/icons/leftIcon.svg?react";
import RightIcon from "../../../assets/icons/rightIcon.svg?react";

const Trailer = ({
  media,
  checkList,
}: {
  media?: Medium[];
  checkList?: Checklist[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  if (!media || media.length === 0) {
    return <div className="text-gray-500">No trailer available.</div>;
  }

  const currentItem = media[currentIndex];

  const handleNext = () => {
    setPlayVideo(false);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setPlayVideo(false);
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  return (
    <div className="absolute top-[20%] lg:max-w-[400px] lg:w-full">
      <div className="p-1 bg-white border border-gray-300">
        {/* slider container */}
        <div>
          {/* slider top section */}
          <div className="relative">
            {currentItem.resource_type === "video" && playVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1`}
                className="w-full h-[220px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={currentItem.thumbnail_url || currentItem.resource_value}
                alt="media"
                className="w-full h-[220px] object-cover"
              />
            )}

            {/* Play button */}
            {currentItem.resource_type === "video" && !playVideo && (
              <div className="absolute inset-0 flex items-center justify-between px-3 bg-black/40 hover:bg-black/50 transitio">
                <button className="cursor-pointer " onClick={handlePrev}>
                  <LeftIcon />
                </button>
                <button onClick={() => setPlayVideo(true)} className="">
                  <PlayIcon className="w-12 h-12 cursor-pointer" />
                </button>
                <button className="cursor-pointer" onClick={handleNext}>
                  <RightIcon />
                </button>
              </div>
            )}
          </div>

          {/* slider image navigation */}
          <div className="flex gap-2 overflow-x-hidden px-1 mt-3">
            {media?.map((item, index) => (
              <img
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-[40px] object-cover h-[30px] rounded-sm cursor-pointer ${currentIndex === index ? "border-2 border-green-500" : ""}`}
                src={
                  item?.resource_type === "video"
                    ? item?.thumbnail_url
                    : item?.resource_value
                }
              ></img>
            ))}
          </div>
        </div>

        {/* details container */}
        <div className="px-4 mt-5">
          <div className="font-semibold lg:text-2xl">৳1000</div>
          <button className="bg-green-600 mt-3 font-semibold text-white w-full py-3 rounded-lg border-b-4 border-b-green-700 hover:bg-green-700">
            Enroll
          </button>

          {/* what is in course */}
          <div className="mt-10 pb-6">
            <p className="lg:text-xl font-semibold mb-4">এই কোর্সে যা থাকছে</p>
            <div className="space-y-2">
              {checkList?.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <img className="shrink-0 w-5 h-5" src={item?.icon} alt="" />
                  <p className="lg:text-lg">{item?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
