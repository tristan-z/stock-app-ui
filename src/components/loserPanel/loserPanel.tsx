import React, { useState, useEffect } from "react";
import { Loser } from "./loser/loser";
import { GetLoserResponse } from "../../services/loser/types";
import { getLoserData } from "../../services/loser/loser";

function LoserPanel() {
  const [loserData, setLoserData] = useState<GetLoserResponse[]>([]);

  useEffect(() => {
    getLoserData().then((data) => {
      setLoserData(data);
    });
  }, []);

  return (
    <div>
      <div>
        {loserData.map((tile, idx) => (
          <Loser data={tile} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default LoserPanel;
