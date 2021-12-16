import React, { useState, useEffect } from "react";
import {Loser} from "./loser";
import { getLoserData } from "./utils";


function LoserPanel() {
    const [loserData, setLoserData] = useState([]);

    useEffect(() => {
        getLoserData().then((data) => {
            setLoserData(data);
        });
    },[]);

  return (
    <div>
        <div>
            {loserData.map((tile, idx) => (
                <Loser data={tile} key={idx}/>
            ))}
        </div>
    </div>  
  );
}

export default LoserPanel;

