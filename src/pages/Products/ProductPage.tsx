/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import TitleDescription from "./LeftLayout/TitleDescription";
import Instructor from "./LeftLayout/Instructor";
import HowTheCourse from "./LeftLayout/HowTheCourse";
import WhatYouWillLearn from "./LeftLayout/WhatYouWillLearn";
import { useProductsData } from "../../hooks/useProductsData";

const ProductPage = () => {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const { productsData, loading, error } = useProductsData(lang);

  /* filtering specific sections data */
  const getSectionByType = (type: string) =>
    productsData?.sections?.find((section) => section?.type === type);

  const instructorSection = getSectionByType("instructors");
  const featureSection = getSectionByType("features");
  const pointerSection = getSectionByType("pointers");

  console.log(productsData);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 py-10">
      {/* Left Layout */}
      <div className="lg:col-span-2">
        <TitleDescription
          title={productsData?.title}
          description={productsData?.description}
        />
        <Instructor instructorInfo={instructorSection} />
        <HowTheCourse features={featureSection} />
        <WhatYouWillLearn pointers={pointerSection} />
      </div>

      {/* Right Layout */}
      <div className="lg:col-span-1">Right section</div>
    </div>
  );
};

export default ProductPage;
