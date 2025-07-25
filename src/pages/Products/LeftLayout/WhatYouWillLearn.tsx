import type { Section } from "../../../types/product";
import CheckIcon from "../../../assets/icons/check.svg?react";

const WhatYouWillLearn = ({ pointers }: { pointers?: Section }) => {
  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {pointers?.name}
      </h2>

      {/* container */}
      <div className="grid grid-cols-2 gap-6 lg:p-8 p-6 rounded-lg border border-gray-300 mt-4">
        {pointers?.values?.map((item, index) => (
          <div key={index} className="flex gap-3">
            <CheckIcon className="shrink-0 mt-1" />
            <p className="text-lg text-gray-600">{item?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
