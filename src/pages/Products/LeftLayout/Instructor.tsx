import type { Section } from "../../../types/product";

const Instructor = ({
  instructorInfo,
}: {
  instructorInfo?: Section;
}) => {
  console.log(instructorInfo);

  return (
    <div className="mt-10">
      <h2 className="lg:text-2xl font-semibold text-gray-950 text-xl">
        {instructorInfo?.name}
      </h2>
      <div className="border border-gray-300 px-6 py-8 rounded-lg mt-4 flex items-center gap-5">
        {/* left side */}
        <div className="">
          <img
            loading="lazy"
            className="rounded-full w-[76px] h-[76px]"
            src={instructorInfo?.values?.[0]?.image || ""}
            alt={instructorInfo?.values?.[0]?.name}
          />
        </div>
        {/* right side */}
        <div className="">
          <h5 className="lg:text-xl text-gray-950 font-semibold">
            {instructorInfo?.values?.[0]?.name}
          </h5>
          <p
            className="flex"
            dangerouslySetInnerHTML={{
              __html: instructorInfo?.values?.[0]?.description || "",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
