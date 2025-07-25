export async function getProductPageData(lang: "en" | "bn" = "en") {
  const res = await fetch(
    `https://api.10minuteschool.com/d.iscovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );

  console.log(res);
  const data = await res.json();
  return data;
}
