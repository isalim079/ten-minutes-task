import type { Section } from "../../../types/product";
import CheckIcon from "../../../assets/icons/check.svg?react";

const CourseExecutiveFeature = ({
  exclusiveFeatures,
}: {
  exclusiveFeatures?: Section;
}) => {
  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {exclusiveFeatures?.name}
      </h2>

      {/* container */}
      <div className="border border-gray-300 grid lg:px-8 px-6 rounded-lg mt-4">
        {exclusiveFeatures?.values?.map((item, index) => (
          <div
            className="border-b border-b-gray-300 last:border-b-0 py-5"
            key={index}
          >
            {/* left side */}
            <div>
              <div className="mt-3 flex gap-4 justify-between items-start">
                <div className="space-y-3">
                  <h6 className="font-semibold">{item?.title}</h6>
                  {item?.checklist?.map((checklist, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckIcon className="w-6 h-6" />
                      <p className="text-gray-600 lg:text-lg">{checklist}</p>
                    </div>
                  ))}
                </div>
                <img className="w-[250px]" src={item?.file_url} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExecutiveFeature;
