import { useState } from "react";

const PlayerCard = ({ data }) => {
  const [toggle, setToggle] = useState(true);
  const { name, img, statistics } = data;
  console.log(data);
  console.log(name);
  return (
    <div className="playerCard" onClick={() => setToggle(!toggle)}>
      <div>
        <div>
          {toggle && (
            <div className="playerCard_div">
              <img className="playerCard_img" src={img} alt={img} />
              <h3> {name} </h3>
            </div>
          )}
        </div>
        <div>
          {!toggle && (
            <div className="ul-cont">
              {statistics?.map((stat, index) => {
                return (
                  <ul key={index}>
                    <li> {stat} </li>
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      </div>
      ;
    </div>
  );
};

export default PlayerCard;
