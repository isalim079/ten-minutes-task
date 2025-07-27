import type { Section } from "../../../types/product";
import RightIcon from "../../../assets/icons/rightArrow.svg?react";
import { useState } from "react";

const CourseDetails = ({ courseDetails }: { courseDetails?: Section }) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>(
    {}
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {courseDetails?.name}
      </h2>

      {/* container */}
      <div className="mt-4 border border-gray-300 rounded-lg lg:px-8 py-3 lg:py-4 px-6 space-y-3">
        {courseDetails?.values?.map((item, index) => (
          <div
            key={index}
            className="py-3 pb-5 border-b border-b-gray-300 last:border-b-0 last:pb-0"
          >
            <div
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <div
                className="lg:text-lg"
                dangerouslySetInnerHTML={{ __html: item?.title ?? "" }}
              ></div>
              <RightIcon
                className={`${
                  openDropdowns[index] ? "rotate-[270deg]" : "rotate-90"
                } transition-all duration-200 ease-in-out`}
              />
            </div>
            {openDropdowns[index] && (
              <div
                className="mt-3 space-y-2 text-lg text-gray-600"
                dangerouslySetInnerHTML={{ __html: item?.description ?? "" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
