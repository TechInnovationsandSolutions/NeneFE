const statusCellRender = (info) => {
  const StatusCell = () => {
    return (
      <div className='flex items-center justify-center '>
        <div
          className={`rounded-md py-2 px-4 font-bold w-fit group-hover:bg-white ${
            info.getValue() == "Available"
              ? "bg-[#DAF7E9] text-[#007E41]"
              : "bg-[#FCE8E8] text-[#CA1E1E]"
          }`}
        >
          <span className=''>{info.getValue()}</span>
        </div>
      </div>
    );
  };

  return <StatusCell />;
};

export default statusCellRender;
