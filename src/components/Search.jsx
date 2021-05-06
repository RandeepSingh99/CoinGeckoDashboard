import React from "react";const Search = (props) => (
    <>
      <input placeholder={props.placeholder} className="coin-input" onChange={props.onKeyPressHandle}/>
    </>
  );export default Search;