import type { Section } from "../../../types/product";

const HowTheCourse = ({ features }: { features?: Section }) => {
  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {features?.name}
      </h2>

      {/* card container */}
      <div className="bg-gray-800 grid lg:grid-cols-2 text-white lg:p-8 p-6 rounded-lg mt-4 gap-10">
        {features?.values?.map((item, index) => (
          <div key={index} className="flex gap-3">
            {/* left icon */}
            <div className="shrink-0">
              <img src={item?.icon} alt="" />
            </div>
            {/* right side data */}
            <div>
              <h6 className="lg:text-lg font-semibold">{item?.title}</h6>
              <p className="text-sm lg:text-base text-gray-400 mt-2">
                {item?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowTheCourse;
