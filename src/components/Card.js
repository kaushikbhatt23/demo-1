import React from 'react'

export const Card = (props) => {



    const cardStyle={
        border:'1px solid #ddd',
        borderRadius:'8px',
        padding:'16px',
        margin:'16px',
        boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
        maxWidth:'350px',
        height:'450px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    };
    const lineStyle={
        width:'50%',
        borderBottom:'1px solid #ddd',
    }
    const imageStyle={
        width:'100%',
        height:'57%',
        borderRadius:'4px',
    };


  return (
    <div style={cardStyle}>
        <img src={props.imageSource} alt={props.title} style={imageStyle}/>
        <h3>{props.title}</h3>
        <hr style={lineStyle}/>
        <p>{props.description}</p>
        <span>Price : ${props.price}</span>
    </div>
  )
}
