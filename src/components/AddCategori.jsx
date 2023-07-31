import { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const AddCategori = ({ setCategory, category }) => {
  const [value, setValue] = useState("");
  const handdleSubmit = (evt) => {
    evt.preventDefault();
    if (value == "") {
      return;
    }
    setCategory([value,...category, ]);
    setValue("");
  };

  return (
    <form onSubmit={handdleSubmit} className="w-screen h-[80px] flex flex-col justify-between items-center mt-5">
      <input
        type="text"
        value={value}
        placeholder="Search Gif"
        autoFocus="true"
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        className="focus: outline-none outline-gray-600 w-80"
      />
      <button type="submit" className=" px-10 py-1 bg-gray-600 rounded-md">
        Add
      </button>
    </form>
  );
};

AddCategori.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategori;
