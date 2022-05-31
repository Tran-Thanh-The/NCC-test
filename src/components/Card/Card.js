import React from 'react';
import './Card.scss';

export default function Card(Props) {
  const { title, img, content } = Props;
  return (
    <div className='Card'>
      <h2 className='title'>{title}</h2>
      <div className='content'>
        <img src={img} alt='img' />
        <p>{content}</p>
      </div>
    </div>
  )
}
