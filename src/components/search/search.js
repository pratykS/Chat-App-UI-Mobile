import React, { useState } from "react";
import "./search.css";
const SearchComponent = (props) => {
  const { value, setValue } = props;

  const [placeholder, setPlaceholder] = useState("🔍");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onFocusHandler = () => {
    setPlaceholder("Type here to search messages or friends");
  };

  const onBlurHandler = () => {
    setPlaceholder("🔍");
  };

  return (
    <div className="box">
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export const Search = SearchComponent;
