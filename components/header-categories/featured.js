import img1 from "@/public/assets/images/brandsMini.png";
const FeaturedTab = () => {
  console.log(img1);
  const items = [
    {
      title: "FEATURED ICONS",
      subtext: "View our interviews with famous women in different industries",
    },
    {
      title: "GLAMOUR & LUXURY",
      subtext: "Live and feel the luxury style",
    },
    {
      title: "FASHION & STYLE",
      subtext: "Explore style from exclusive designers",
    },
    {
      title: "SCRAPBOOK",
      subtext: "Explore and view recent fashion trends & styles",
    },
  ];
  return (
    <div className="flex  ">
      <nav className="p-[1.8em] lg:relative flex flex-col lg:flex-row w-full lg:h-fit  h-full  right-0 text-black bg-white ">
        <div className="lg:flex w-full md:w-[90%] md:m-auto justify-between border-[#D8D8D8] ">
          <div className="border-b lg:border-b-0 py-2 px-3 w-full border-[#D8D8D8]">
            <section className=" flex flex-col  md:flex-row  justify-between gap-2     text-header-gray">
              {items.map((item, index) => {
                return (
                  <div key={index} className=" md:w-1/4 flex  flex-col gap-2 ">
                    <img
                      src={img1.src}
                      className=" pb-1 lg:h-[250px] lg:m-0 "
                      alt="brand image"
                    />
                    <p className="text-black text-center font-bold text-xl">
                      {item.title}
                    </p>
                    <span className=" leading-snug max-w-3/5 text-center text-[.7em]">
                      {item.subtext}
                    </span>
                  </div>
                );
              })}{" "}
            </section>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FeaturedTab;
