import PlayerCard from "./PlayerCard";
import { data as datas } from "../helper/data";
import { useState } from "react";
const CardContainer = () => {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const handleSearch = () => {
    setSearch(text);
    setText("");
  };

  function handleDown(e) {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  const filteredData = datas?.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredData);
  return (
    <div className="cardContainer">
      <div className="input-search">
        <input
          type="text"
          className="cardContainer_input  form-control w-50 h-50"
          placeholder="Enter a Legend"
          value={text}
          onChange={({ target }) => setText(target.value)}
          onKeyDown={handleDown}
        />
        <button
          className="btn btn-danger h-50"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="card-cont">
        {filteredData?.map((data, index) => {
          return <PlayerCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
