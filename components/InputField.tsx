import React from "react";

interface InputFieldProps {
  legend: string;
  placeholder: string;
  size?: number;
  showSVG?: boolean; 
}

const InputField: React.FC<InputFieldProps> = ({
  legend,
  placeholder,
  size = 23,
  showSVG = false,
}) => {
  return (
    <fieldset className="text-sm py-7 px-5.5 border-[#EBEBEB] border-2 rounded-xl transition-all duration-300 hover:border-[#A0A0A0] focus-within:border-[#0047AB]">
      <legend className="">{legend}</legend>
      <div className="flex items-center">
        {showSVG && (
          <img
            src="/icons/PersonFilled.svg"
            alt="PersonFilled"
          />
        )}
        <input type="" size={size} placeholder={placeholder} className="focus:outline-none"/>
        <button className="rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer">
          <img
            src="/icons/ArrowDropUpFilled.svg"
            alt=""
            width={24}
            height={24}
            
          />
        </button>
        <button className="rounded-full transition-colors duration-200 hover:bg-gray-100 cursor-pointer">
          <img
            src="/icons/AutocompleteClose.svg"
            alt=""
          />
        </button>
      </div>
    </fieldset>
  );
};

export default InputField;
