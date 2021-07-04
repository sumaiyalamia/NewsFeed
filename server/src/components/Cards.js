import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>All Posts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Flower is perfect for welcoming spring in your home.'
              label='Flower'
            />
            <CardItem
              src='images/2.jpg'
              text='Sky is the limit!'
              label='Sky'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;