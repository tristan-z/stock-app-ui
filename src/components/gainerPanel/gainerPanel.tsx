import React, { useState, useEffect } from "react";
import { Gainer } from "./gainer/gainer";
import { GetGainerResponse } from "../../services/gainer/types";
import { getGainerData } from "../../services/gainer/gainer";

function GainerPanel() {
  const [gainerData, setGainerData] = useState<GetGainerResponse[]>([]);

  useEffect(() => {
    getGainerData().then((data) => {
      setGainerData(data);
    });
  }, []);

  return (
    <div>
      <div>
        {gainerData.map((tile, idx) => (
          <Gainer data={tile} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default GainerPanel;
