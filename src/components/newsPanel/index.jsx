import React, { useState, useEffect } from 'react';
import {News} from "./news";
import { getNewsData } from "./utils";

function NewsPanel() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        getNewsData().then((news) => {
            setNewsData(news);
        });
    },[]);

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