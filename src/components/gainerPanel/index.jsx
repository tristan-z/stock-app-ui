import React, { useState, useEffect } from "react";
import {Gainer} from "./gainer";
import { getGainerData } from "./utils";

function GainerPanel() {
    const [gainerData, setGainerData] = useState([]);

    useEffect(() => {
        getGainerData().then((data) => {
            setGainerData(data);
        });
    },[]);

  return (
    <div>
        <div>
            {gainerData.map((tile, idx) => (
                <Gainer data={tile} key={idx}/>
            ))}
        </div>
    </div>  
  );
}

export default GainerPanel;

