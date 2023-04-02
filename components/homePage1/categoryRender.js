import Carousel, { consts } from "react-elastic-carousel";
import CardArtcile from "./cardArtcile";

export default function CategoryRender({ data, title }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="slider mt-10">
      <h3 className="pl-20 text-lg">{title}</h3>
      <Carousel
        itemsToShow={4}
        breakPoints={breakPoints}
        className="mt-3"
        enableAutoPlay
        autoPlaySpeed={7000}
        renderArrow={({ type, onClick, isEdge }) => {
          const pointer =
            type === consts.PREV ? (
              <span className="text-lg">‹</span>
            ) : (
              <span className="text-lg">›</span>
            );
          return (
            <div className="flex items-center justify-center p-2">
              <button
                onClick={onClick}
                disabled={isEdge}
                className="w-8 h-8 rounded-full text-white bg-slate-500"
              >
                {pointer}
              </button>
            </div>
          );
        }}
      >
        {data.map((item) => (
          <CardArtcile item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
}
