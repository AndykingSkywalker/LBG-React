import King from "./King";
import axios from "axios";
import { useState } from "react";

function KingSolution() {
  const [kings, setkings] = useState([]);
  const [filter, setFilter] = useState("");

  function getKings() {
    axios
      .get(
        "https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json"
      )
      .then((response) => {
        setkings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const kingsData = [];

  for (const king of kings) {
    if (
      filter.length === 0 ||
      king.nm.toLowerCase().startsWith(filter.toLowerCase()) ||
      king.nm.toLowerCase().includes(filter.toLowerCase())
    )
      kingsData.push(<p>{king.nm}</p>);
  }

  return (
    <div>
      <h2> Kings </h2>
      <input
        type="text"
        placeholder="Enter filter here"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={getKings}>Click here for a king</button>
      {kingsData}
      <br />
    </div>
  );
}

export default KingSolution;
