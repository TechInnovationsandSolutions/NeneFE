function ProductCard({ name, img, price }) {
  return (
    <div className="w-64 h-[32j rem] flex flex-col">
      <div className="relative w-full h-[90%]">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <p className="text-white font-medium absolute left-4 bottom-6">
          NEW NOW
        </p>
        <div className="inline-flex rounded-full p-[6px] bg-white z-10 absolute right-4 bottom-6">
          <img src="/assets/svgs/wishlistIcon.svg" alt="" />
        </div>
      </div>
      <div className="text-left flex-grow ">
        <p>{name}</p>
        <p className="text-lg font-medium">N{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
