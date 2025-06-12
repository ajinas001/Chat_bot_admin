import React from "react";

const CreateButton = ({ text = "Create", onClick, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-md bg-[#0e427d] text-white font-medium hover:bg-[#196cd8] transition-colors duration-300 shadow-sm ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
};

export default CreateButton;
