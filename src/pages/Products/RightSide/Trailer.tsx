import { useState } from "react";
import type { Medium } from "../../../types/product";
import PlayIcon from "../../../assets/icons/playIcon.svg?react";
import LeftIcon from "../../../assets/icons/leftIcon.svg?react";
import RightIcon from "../../../assets/icons/rightIcon.svg?react";

const Trailer = ({ media }: { media?: Medium[] }) => {
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
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Trailer;
