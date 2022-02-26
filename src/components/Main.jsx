import React, { useContext } from "react";
import WordContext from "../context/WordContext";
import RowOfLetters from "./RowOfLetters";

function Main() {
  const { attempts } = useContext(WordContext);
  return(
    <main>
      { attempts.map((_num, index) => (
        <RowOfLetters key={ index } index={ index } />
      ))}
    </main>
  )
}

export default Main;
