import { useEffect, useState } from "react";
import type { ProductData } from "../types/product";
import { getProductPageData } from "../api/getProductPageData";

export const useProductsData = (lang: "en" | "bn") => {
  const [productsData, setProductsData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getProductPageData(lang)
      .then((res) => setProductsData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [lang]);

  return { productsData, loading, error };
};
