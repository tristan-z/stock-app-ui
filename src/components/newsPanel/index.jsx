import React, { useState, useEffect } from 'react';
import {News} from "./news";
import { getNewsData } from "./utils";

function NewsPanel() {
    const [newsData, setNewsData] = useState([]);
    const limit = 2;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getNewsData(limit, index).then((news) => {
            setNewsData(news);
        });
    },[index]);

  return (
    <div>
        <div>
            {newsData.map((news, idx) => (
                <News data={news} key={idx}/>
            ))}
        </div>
    </div>  
  );
}

export default NewsPanel;