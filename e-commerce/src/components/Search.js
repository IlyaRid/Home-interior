import React, { useState } from "react";

export default function Search(props) {
  let [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.search(e.target.value);
    }
  };

  return (
    <input
      className="search"
      type="search"
      placeholder="Search"
      value={searchField}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
}
