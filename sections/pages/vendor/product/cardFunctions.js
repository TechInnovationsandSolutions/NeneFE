export const handleEditCardData = (index, setCardData, setShowMoreOptions) => {
  setCardData((prevData) =>
    prevData.map((card) => {
      if (card.id === index) {
        return { ...card, isEditing: !card.isEditing };
      }
      return card;
    })
  );
  setShowMoreOptions(false);
};

export const deleteCard = (index, setCardData, cardData) => {
  const newCardData = cardData.filter((card) => card.id !== index);
  setCardData(newCardData);
};

export const toggleInStock = (index, setInStock, inStock, setCardData) => {
  setInStock(!inStock);
  if (inStock) {
    setCardData((prevData) =>
      prevData.map((card) => {
        if (card.id === index) {
          return {
            ...card,
            quantity: 0,
            isEditing: false,
          };
        }
        return card;
      })
    );
  } else {
    setCardData((prevData) =>
      prevData.map((card) => {
        if (card.id === index) {
          return {
            ...card,
            quantity: card.tempData.quantity,
            isEditing: false,
          };
        }
        return card;
      })
    );
  }
};

export const handleFieldChange = (index, e, setCardData) => {
  const { value, name } = e.target;

  setCardData((prevData) =>
    prevData.map((card) => {
      if (card.id === index) {
        const updatedTempData = { ...card.tempData, [name]: value };
        return { ...card, tempData: updatedTempData };
      }
      return card;
    })
  );
};

export const handleInputBlur = (index, setCardData) => {
  setCardData((prevData) =>
    prevData.map((card) => {
      // console.log({ id: card.id, index: clickedProductIndex });
      if (card.id === index) {
        return {
          ...card,
          name: card.tempData.name,
          quantity: card.tempData.quantity,
          price: card.tempData.price,
          isEditing: false,
        };
      }
      return card;
    })
  );
};

export const toggleShowMoreOptions = (
  index,
  setShowMoreOptions,
  setClickedProductIndex,
  showMoreOptions
) => {
  setShowMoreOptions(!showMoreOptions);
  setClickedProductIndex(index);
};
