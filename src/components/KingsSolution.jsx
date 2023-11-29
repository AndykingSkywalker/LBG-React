import King from "./King";
import kings from "../kings.json";
import { useState } from "react";

function KingSolution() {
  const [filter, setFilter] = useState("");

  const kingComponents = [];

  for (const king of kings) {
    if (
      filter.length === 0 ||
      king.nm.toLowerCase().startsWith(filter.toLowerCase()) ||
      king.nm.toLowerCase().includes(filter.toLowerCase())
    )
      kingComponents.push(
        <King
          key={king.nm + " " + king.yrs}
          country={king.cty}
          house={king.hse}
          name={king.nm}
          years={king.yrs}
        />
      );
  }
  return (
    <div>
      <h2> Kings </h2>
      <input type="text" placeholder="Enter filter here" value={filter} onChange={e => setFilter(e.target.value)} />
      {kingComponents}
    </div>
  );
}

export default KingSolution;
