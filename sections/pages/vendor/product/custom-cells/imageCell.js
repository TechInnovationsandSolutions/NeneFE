import Image from "next/image";

const imageCellRender = (info) => {
  const ImageCell = () => {
    return (
      <div className='flex items-center justify-center'>
        <div className='relative w-20 h-20'>
          <Image
            src={info.getValue()}
            alt=''
            fill
            className='object-center '
            sizes='100vw'
          />
        </div>
      </div>
    );
  };

  return <ImageCell />;
};

export default imageCellRender;
