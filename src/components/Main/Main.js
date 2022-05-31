import React from 'react';
import './Main.scss';
import { useState } from 'react';
import Card from '../Card/Card';
import { Data } from '../actions/initData';

export default function Main() {
  const [cardData, setCardData] = useState(Data.CardData);
  const [mainData, setMainData] = useState(Data.MainData);

  return (
    <div className='container'>
      <img src={mainData.img} alt='logo' />
      <div className='content'>
        <h2 className='title'>{mainData.title}</h2>
        <p>{mainData.content}</p>
      </div>
      <div className='cardList'>
        {cardData.map((e, index) => <Card key={index} content={e.content} title={e.title} img={e.img} />)}
      </div>
    </div>
  )
}
