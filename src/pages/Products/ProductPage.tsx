/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getProductPageData } from "../../api/getProductPageData";
import TitleDescription from "./LeftLayout/TitleDescription";
import type { ProductData } from "../../types/product";
import Instructor from "./LeftLayout/Instructor";

const ProductPage = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getProductPageData(lang)
      .then((res) => setProductData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [lang]);

  console.log(productData);

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 py-10">
      {/* Left Layout */}
      <div className="lg:col-span-2">
        <TitleDescription
          title={productData?.title}
          description={productData?.description}
        />
        <Instructor instructorInfo={productData?.sections?.find((section) => section?.type === "instructors")} />
      </div>

      {/* Right Layout */}
      <div className="lg:col-span-1">
        Right section
      </div>
    </div>
  );
};

export default ProductPage;
