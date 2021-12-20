import React, { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import { Tile } from "./tile/Tile";
import { DaySummaryResponse } from "../../services/summary/types";
import { getDaySummary } from "../../services/summary/summary"

function Banner() {
  const [tileData, setTileData] = useState<DaySummaryResponse[]>([]);

  useEffect(() => {
    getDaySummary().then((data) => {
      setTileData(data);
    });
  }, []);

  return (
    <div>
      {/* @ts-ignore */ }
      <Marquee velocity={10}>
        {tileData.map((tile, idx) => (
          <Tile data={tile} key={idx} />
        ))}
      </Marquee>
    </div>
  );
}

export default Banner;
