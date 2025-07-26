import type { Section } from "../../../types/product";
import CheckIcon from "../../../assets/icons/check.svg?react";

const CourseDetails = ({ courseDetails }: { courseDetails?: Section }) => {
  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {courseDetails?.name}
      </h2>

      {/* container */}
      <div className="mt-4 border border-gray-300 rounded-lg lg:p-8 p-6 space-y-3">
        <p className="flex items-center gap-2 text-gray-600 lg:text-lg">
          <CheckIcon className="w-6 h-6" /> ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল
          ইন্টারনেট)
        </p>
        <p className="flex items-center gap-2 text-gray-600 lg:text-lg">
          <CheckIcon className="w-6 h-6" /> স্মার্টফোন অথবা পিসি
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
