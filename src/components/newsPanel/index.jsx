import React, { useState, useEffect } from 'react';
import {News} from "./news";

const data = [
    {
        title: 'US stocks hover near record territory',
        description: 'US stocks are trading higher',
        author: 'CNN Business',
        date: 'October 27, 2021',
        link:  'https://www.cnn.com/business/live-news/stock-market-news-102721/index.html',
    },
    {
        title: 'US stocks hover near record territory',
        description: 'US stocks are trading higher',
        author: 'CNN Business',
        date: 'October 27, 2021',
        link:  'https://www.cnn.com/business/live-news/stock-market-news-102721/index.html',
    },
    {
        title: 'US stocks hover near record territory',
        description: 'US stocks are trading higher',
        author: 'CNN Business',
        date: 'October 27, 2021',
        link:  'https://www.cnn.com/business/live-news/stock-market-news-102721/index.html',
    },
]

function NewsPanel() {
  return (
    <div>
        <div>
            {data.map((news, idx) => (
                <News data={news} key={idx}/>
            ))}
        </div>
    </div>  
  );
}

export default NewsPanel;