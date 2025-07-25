const TitleDescription = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div>
      <h1 className="text-gray-950 text-[22px] lg:text-4xl font-semibold">
        {title}
      </h1>
      <div
        className="lg:text-xl mt-2 lg:max-w-[80%] text-gray-700"
        dangerouslySetInnerHTML={{ __html: description || "" }}
      ></div>
    </div>
  );
};

export default TitleDescription;
