import React from 'react'
import styled from 'styled-components'
import NumSelector from '../NumSelector'
import RollDice from '../RollDice'
import TotalScore from '../TotalScore'
import { useState } from 'react';
import { Button,OutlinedButton } from '../Button'
import Rules from '../Rules'


const GamePage = () => {
  const [ score,setScore ] = useState(0)
  const [selectedNum, setSelectedNum] = useState()
  const [currentDice,setCurrentDice] = useState(1);
  const [ err, setErr] = useState()
  const [isShowRules,  setIsShowRules] = useState(false)

  const generateRandomNumber = (min,max) =>{
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
}

const rollDice =() =>{
    let num = generateRandomNumber(1,7)
    setCurrentDice((prev) => num)

    if(!selectedNum){ 
      setErr("You have not selected any number")
      return;
    }
    setErr(null)
    if(selectedNum == currentDice){
      setScore((prev) => prev+selectedNum)

    }
    else{
      setScore((prev) => prev - 2)
    }

    setSelectedNum(undefined)
}

const resetScore = () =>{
  setScore(0)
}



  return (
    <MainContainer>
      <div className='top-section'>
      <TotalScore score={score}/>
      <NumSelector 
        err = {err}
        setErr = {setErr}
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}/>
     
      </div>
      <RollDice 
      currentDice={currentDice}
      rollDice={rollDice}/>
      <div className='btns'>
        <OutlinedButton onClick={resetScore}>Reset Score</OutlinedButton>
        <Button onClick={() => setIsShowRules( prev => !prev)}>{(isShowRules) ? 'Hide' : 'Show' } Rules</Button>
        {isShowRules && <Rules/>}
      </div>
       
    </MainContainer>
  )
}

export default GamePage

const MainContainer = styled.main`
  .top-section{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 70px;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    margin-top: 40px;
  }
`