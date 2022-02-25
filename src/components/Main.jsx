import React from "react";
import { FIVE_NUMBERS } from "../services/constants";
import RowOfLetters from "./RowOfLetters";

function Main() {
  return(
    <main>
      { FIVE_NUMBERS.map(() => (
        <RowOfLetters />
      ))}
    </main>
  )
}

export default Main;
