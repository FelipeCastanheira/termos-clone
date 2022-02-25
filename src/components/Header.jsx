import React, { useContext } from "react";
import WordContext from "../context/WordContext";

function Header() {
  const { data } = useContext(WordContext);
  return(
    <header>
      <h1>TERMO</h1>
      <h6>{ data }</h6>
    </header>
  )
}

export default Header;
