import React from "react";
import { FIVE_NUMBERS } from "../services/constants";
import RowOfLetters from "./RowOfLetters";

function Main() {
  return(
    <main>
      { FIVE_NUMBERS.map((num, index) => (
        <RowOfLetters key={ num } index={ index } />
      ))}
    </main>
  )
}

export default Main;
