import React, { useState, useEffect } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import {Tile} from "./tile";

const data = [
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },    
    {
        symbol: 'AAPL',
        name: 'Apple, Inc.',
        price: 149.26,
        change: 0.34, // percent
    },
]

function Banner() {
  return (
    <div>
        <Marquee velocity={12}>
            {data.map((tile) => (
                <Tile data={tile}/>
            ))}
        </Marquee>
    </div>  
  );
}

export default Banner;