import Image from "next/image";
import Link from "next/link";

function ProductCard({ name, img, price, newNow }) {
  return (
    <div className="w-64 flex flex-col my-5 mx-[20px]">
      <div className="relative w-full h-[512px] overflow-hidden">
        <Link href="#">
          <Image src={img} fill className="object-cover" alt="dress" />
        </Link>
        {newNow && (
          <p className="text-white font-medium absolute left-4 bottom-6">
            NEW NOW
          </p>
        )}
        <div className="inline-flex rounded-full p-[6px] bg-white z-10 absolute right-4 bottom-6">
          <Image
            src="/assets/svgs/wishlistIcon.svg"
            height={20}
            width={20}
            alt="wishlist"
          />
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
