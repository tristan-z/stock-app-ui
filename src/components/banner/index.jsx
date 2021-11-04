import React, { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import {Tile} from "./tile";
import { getTileData } from "./utils";

function Banner() {
    const [tileData, setTileData] = useState([]);

    useEffect(() => {
        getTileData().then((data) => {
            setTileData(data);
        });
    },[]);

  return (
    <div>
        <Marquee velocity={12}>
            {tileData.map((tile, idx) => (
                <Tile data={tile} key={idx}/>
            ))}
        </Marquee>
    </div>  
  );
}

export default Banner;

