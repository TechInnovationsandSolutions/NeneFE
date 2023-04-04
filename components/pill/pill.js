function Pill({ text }) {
  return <button className={btnStyle}>{text}</button>;
}

export default Pill;

const btnStyle =
  "bg-[#ECECEC] text-gray-700 rounded-3xl px-4 py-2 my-3 mx-2 font-medium w-auto shrink-0";
