import React, { useEffect } from 'react';
import { useState } from 'react';
import {Card} from './Card';
var async = require('async');


export const Container = () => {


  const style={
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap',
  };
  const [data,setData]=useState([]);

  console.log(0);
  const fetchData=async()=>{
    const response=await fetch('https://dummyjson.com/products');
    console.log(2);
    const jsonData=await response.json();
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(res => setData(res))
    setData(jsonData)
    // console.log(jsonData)
  }


  useEffect(() => {
    fetchData();
    console.log(1);
  }, [])
  
  console.log(3);
  return (
    <>
    {console.log(data)}
    <div style={style}>
      {data.products?.map((item,index)=>(
        <Card 
          key={index} 
          title={item.title} 
          description={item.description} 
          price={item.price} 
          imageSource={item.images[0]}/>
      ))}
    </div>
    </>
  )
}
