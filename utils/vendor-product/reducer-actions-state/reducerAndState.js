export const initialState = {
  selectedColors: [],
  colorsPicked: [],
  displayColorPicker: false,
  color: "",
  colorsPickedNameAndHex: [],
  colorBoxesList: [],
  selectedSizes: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_COLORS":
      return { ...state, selectedColors: action.payload };
    case "SET_COLORS_PICKED":
      return { ...state, colorsPicked: action.payload };
    case "SET_DISPLAY_COLOR_PICKER":
      return { ...state, displayColorPicker: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_COLORS_PICKED_NAME_AND_HEX":
      return { ...state, colorsPickedNameAndHex: action.payload };
    case "SET_COLOR_BOXES_LIST":
      return { ...state, colorBoxesList: action.payload };
    case "SET_SELECTED_SIZES":
      return { ...state, selectedSizes: action.payload };
    default:
      return state;
  }
};
