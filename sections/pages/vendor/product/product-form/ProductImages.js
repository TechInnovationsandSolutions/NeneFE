import React, { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import { FileInput } from "@/components/form-inputs";
import Image from "next/image";
import { AiOutlineCloseSquare } from "react-icons/ai";

function ProductImages({ errors, control, getValues, setValue }) {
  const description =
    "Upload images of your product to showcase its features and quality. Please provide clear, high-quality images that accurately represent your product.";

  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagesToBeSubmitted, setImagesToBeSubmitted] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const formValues = JSON.parse(localStorage.getItem("formValues"));
      setUploadedImages(formValues?.productImages);
      setImagesToBeSubmitted(formValues?.productImages);
    }
  }, []);

  const handleFileUpload = (event) => {
    const files = event.target.files;

    // Filter image files incase the user uploads other file types.
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    imageFiles.forEach((file, i) => {
      const imageUrl = URL.createObjectURL(file);
      const imageName = file.name;
      const imageId = imageName?.substring(0, 5) + i;

      setUploadedImages((prevImages) => [
        ...prevImages,
        { name: imageName, url: imageUrl, id: imageId },
      ]);

      const reader = new FileReader();

      reader.onload = (e) => {
        const imageData = e.target.result;
        setImagesToBeSubmitted((prevImages) => [
          ...prevImages,
          { name: imageName, url: imageData, id: imageId },
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  const removeImages = (imageUrl, index) => {
    setUploadedImages(
      uploadedImages?.filter(
        (uploadedImage, i) => imageUrl !== uploadedImage.url
      )
    );

    setImagesToBeSubmitted(
      imagesToBeSubmitted?.filter((image, i) => i != index)
    );
  };

  const uploadedImagesList = uploadedImages?.map((uploadedImg, index) => (
    <div
      className={`relative flex items-center justify-center p-2  border-2 border-dashed w-fit`}
      key={index}
    >
      <div className='relative w-20 h-20 bg-gray-200 rounded-md  md:w-[120px] md:h-[120px] '>
        <Image
          src={uploadedImg.url}
          fill
          alt={`Uploaded image ${index + 1}`}
          className='object-cover object-top rounded-md '
        />
      </div>
      <AiOutlineCloseSquare
        className='absolute top-0 right-0 text-gray-400 cursor-pointer'
        onClick={() => removeImages(uploadedImg.url, index)}
      />
    </div>
  ));

  useEffect(() => {
    setValue("productImages", imagesToBeSubmitted);
  }, [setValue, getValues, imagesToBeSubmitted]);

  return (
    <FormWrapper title='Product Images' description={description}>
      <FileInput
        errors={errors}
        control={control}
        name='productImages'
        errorMessage='Product images is required'
        label='Or click to upload'
        handleFileUpload={handleFileUpload}
        isMultiple={true}
      />
      <div className='grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-6 mt-4 md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]'>
        {uploadedImagesList}
      </div>
    </FormWrapper>
  );
}

export default ProductImages;
