const TitleDescription = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-[22px] lg:text-4xl font-semibold">
          {title}
        </h1>
        <div
          className="lg:text-xl mt-2 lg:max-w-[55%] text-gray-400"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>
      </div>
    </div>
  );
};

export default TitleDescription;
