import React from "react";

function TextInput({ value, handler, placeholder }) {
  return (
    <div className="flex relative rounded-2xl border min-w-150 min-h-20 m-5 shadow hover:border-pink-600">
      <input
        id="input"
        type="text"
        value={value}
        onChange={handler}
        className="peer focus:outline-none pl-2 flex-1 text-2xl"
      />
      <label
        htmlFor="input"
        className="flex absolute w-32 h-32 left-3 top-1.5 peer-hover:text-pink-600"
      >
        {placeholder}
      </label>
    </div>
  );
}

export default TextInput;
