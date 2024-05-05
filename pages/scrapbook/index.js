import img1 from "../../public/assets/gallery/Rectangle 373.png";
import GalleryItem from "@/components/galleryItem";
import Button from "@/components/button/button";
import { useEffect, useState } from "react";
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
  const [selectClicked, setSelectClicked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(imgArray);

  useEffect(() => {}, []);

  function handleNoOfItemsClicked(e, id) {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      console.log(e.target.checked, id);
      setSelectedItems((prevItems) => prevItems.filter((item) => item !== id));
    }
    console.log(selectedItems);
  }
  function removePhotos() {
    const items = displayedItems.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setDisplayedItems(items);
    setSelectedItems([])
  }
  return (
    <div className="px-[2%] py-10">
      <main className="flex flex-col gap-5">
        <div className="min-h-[52px]">
        {!selectClicked ? (
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="black"
              customClassName="w-full md:w-auto "
              onClick={() => {
                setModalInView("ResetModal");
              }}
              text="Insert Photo"
            />
            <Button
              variant="white"
              onClick={() => {
                setSelectClicked(true);
              }}
              text="Select Photo"
              customClassName="border w-full md:w-auto "
            />
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <p>
              {" "}
              {/* count to be fixed  */}
              <strong>{selectedItems.length}</strong> selected{" "}
            </p>
            {selectedItems.length > 0 ? (
              <Button
                variant="white"
                onClick={() => {
                  removePhotos();
                }}
                text="Remove Photos"
                customClassName="border w-full md:w-auto "
              />
            ) : null}{" "}
          </div>
        )}
        </div>
        {/* Scrapbook Wrapper */}
        <div className="scrapbook-wrapper ">
          {displayedItems.map((img) => {
            return (
              <GalleryItem
                img={img}
                handleCheckBoxParent={handleNoOfItemsClicked}
                selectClicked={selectClicked}
                key={img.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Scrapbook;
