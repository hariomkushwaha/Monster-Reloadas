import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css'  

export const Cardlist = props => (
   <div className='card-list'>
   {
    props.monsters.map(monsters=> (
    <Card key={ monsters.id } monsters = {monsters}/>))
  }
   </div>
);