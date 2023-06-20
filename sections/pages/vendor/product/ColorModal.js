import React from "react";

function ColorModal({ children, toggleModal }) {
  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center'>
      {children}
    </div>
  );
}

export default ColorModal;
