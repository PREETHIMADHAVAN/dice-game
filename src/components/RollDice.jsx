import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const RollDice = ({currentDice,rollDice}) => {



  return (
    
        <DiceContainer>
            <div className='dice'
            onClick={rollDice}>

                <img src={`images/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    
  )
}

export default RollDice;
const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }
`