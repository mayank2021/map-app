import React, { useState } from "react";
import "./Usage.css";
import { data } from "../../Data/Data";

const Usage = () => {
  const [usage, setUsage] = useState({
    morethan5k: 0,
    fiveto1k: 0,
    five100to1k: 0,
    lessthan500: 0,
  });
  const [isData, setIsData] = useState(true);
  let morethan5k1 = 0,
    fiveto1k1 = 0,
    five100to1k1 = 0,
    lessthan5001 = 0,
    percentagemorethan5k,
    percentage5kto1k,
    percentage500to1k,
    percentagelessthan500;

  if (isData) {
    data.map((ele) => {
      if (ele.usage > 5000) {
        morethan5k1 = morethan5k1 + ele.usage;
      } else if (ele.usage < 5000 && ele.usage > 1000) {
        fiveto1k1 = fiveto1k1 + ele.usage;
      } else if (ele.usage < 1000 && ele.usage > 500) {
        five100to1k1 = five100to1k1 + ele.usage;
      } else if (ele.usage < 500) {
        lessthan5001 = lessthan5001 + ele.usage;
      }
    });
    let newObject = {
      morethan5k: morethan5k1,
      fiveto1k: fiveto1k1,
      five100to1k: five100to1k1,
      lessthan500: lessthan5001,
    };
    setUsage(newObject);

    setIsData(false);
  }
  let total =
    usage.morethan5k + usage.five100to1k + usage.fiveto1k + usage.lessthan500;
  percentagemorethan5k = Math.round((usage.morethan5k / total) * 100);
  percentage5kto1k = Math.round((usage.fiveto1k / total) * 100);
  percentage500to1k = Math.round((usage.five100to1k / total) * 100);
  percentagelessthan500 = Math.round((usage.lessthan500 / total) * 100);

  return (
    <div className="usage-main--container">
      <div className="usage-left--container">$ Usage</div>
      <div className="usage-right--container">
        <div
          style={{ width: `${percentagemorethan5k}%` }}
          className="bar-line--container-one"
        >
          <div className="bar-line-one"></div>
          <div className="bar-data--container">
            <div className=" chart-dot chart-dot--one"></div>
            <div> &#62; $5K</div>
            <div>{percentagemorethan5k}%</div>
          </div>
        </div>
        <div
          style={{ width: `${percentage5kto1k}%` }}
          className="bar-line--container-two"
        >
          <div className="bar-line-two"></div>
          <div className="bar-data--container">
            <div className=" chart-dot chart-dot--two"> </div>
            <div> $1k - $5K</div>
            <div>{percentage5kto1k}%</div>
          </div>
        </div>
        <div
          style={{ width: `${percentage500to1k}%` }}
          className="bar-line--container-three"
        >
          <div className="bar-line-three"></div>
          <div className="bar-data--container">
            <div className="chart-dot chart-dot--three"> </div>
            <div> $500 -$1K</div>
            <div>{percentage500to1k}%</div>
          </div>
        </div>
        <div
          style={{ width: `${percentagelessthan500}%` }}
          className="bar-line--container-four"
        >
          <div className="bar-line-four"></div>
          <div className="bar-data--container">
            <div className=" chart-dot chart-dot--four"> </div>
            <div> &#60; $500</div>
            <div>{percentagelessthan500}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
