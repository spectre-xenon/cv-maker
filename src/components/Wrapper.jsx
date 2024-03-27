import { MultiItem } from "./MultiJob";
import { useState } from "react";

function Wrapper() {
  const [itemArr, setItemArr] = useState([]);
  return <MultiItem itemArr={itemArr} setItemArr={setItemArr}></MultiItem>;
}

export { Wrapper };
