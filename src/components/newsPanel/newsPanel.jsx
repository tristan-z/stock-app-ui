import React, { useState, useEffect } from "react";
import { News } from "./news/news";
import { GetNewsResponse } from "../../services/news/types";
import { getNewsData } from "../../services/news/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NewsPanel() {
  const [newsData, setNewsData] = useState([]);
  const [total, setTotal] = useState(0);
  const limit = 2;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getNewsData(limit, index).then((response) => {
      setNewsData(response.message);
      setTotal(response.total);
    });
  }, [index]);

  function incrementIndex() {
    setIndex(index + limit);
    console.log(index, total);
    console.log(index >= total - limit);
  }

  function decrementIndex() {
    setIndex(index - limit);
  }

  return (
    <div>
      <div>
        {newsData.map((news, idx) => (
          <News data={news} key={idx} />
        ))}
        <button onClick={decrementIndex} disabled={index === 0}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={incrementIndex} disabled={index >= total - limit}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default NewsPanel;
