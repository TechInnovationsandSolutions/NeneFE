// return Object.keys(colorData).map((colorName, i) => {
//   const colorHexValue = colors[colorName];

//   const isSelected = selectedColors.includes(colorHexValue);

//   const boxStyle = {
//     backgroundColor: colorHexValue,
//   };

//   const handleClick = (color) => {
//     if (selectedColors.includes(color)) {
//       setSelectedColors(selectedColors.filter((c) => c !== color));
//     } else {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   return (
//     <div
//       className={`w-11 h-11 border ${
//         isSelected ? "border-black" : "border-transparent"
//       } flex items-center justify-center cursor-pointer`}
//       key={colorName}
//       onClick={() => handleClick(colorHexValue)}
//     >
//       <div style={boxStyle} className='w-8 h-8' />
//     </div>
//   );
// });

// const renderColorBox = (colorsData) => {
//   return colorsData.map((colorObj, i) => {
//     const colorName = colorObj.name;
//     const colorHexValue = colorObj.hex;

//     const isSelected = selectedColors.includes(colorHexValue);

//     const boxStyle = {
//       backgroundColor: colorHexValue,
//     };

//     const handleClick = (color) => {
//       if (selectedColors.includes(color)) {
//         setSelectedColors(selectedColors.filter((c) => c !== color));
//       } else {
//         setSelectedColors([...selectedColors, color]);
//       }
//     };

//     return (
//       <div
//         className={`w-11 h-11 border ${
//           isSelected ? "border-black" : "border-transparent"
//         } flex items-center justify-center cursor-pointer`}
//         key={colorName}
//         onClick={() => handleClick(colorHexValue)}
//       >
//         <div style={boxStyle} className='w-8 h-8' />
//       </div>
//     );
//   });
// };
