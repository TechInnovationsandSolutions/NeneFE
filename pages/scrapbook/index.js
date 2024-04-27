import img1 from "../../public/assets/gallery/Rectangle 373.png";
import GalleryItem from "@/components/galleryItem";
const Scrapbook = () => {
  const imgArray = [
    { src: img1, id: 1 },
    { src: img1, id: 2 },
    { src: img1, id: 3 },
    { src: img1, id: 4 },
    { src: img1, id: 5 },
    { src: img1, id: 6 },
    { src: img1, id: 7 },
    { src: img1, id: 8 },
    { src: img1, id: 9 },
    { src: img1, id: 10 },
    { src: img1, id: 11 },
    { src: img1, id: 12 },
  ];
  return (
    <div className="px-[8%] py-5">
      <h1 className="text-center font-bold">Scrapbook</h1>
      <main>
        <div className="scrapbook-wrapper ">
          {imgArray.map((img) => {
            return <GalleryItem img={img} key={img.id} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Scrapbook;
