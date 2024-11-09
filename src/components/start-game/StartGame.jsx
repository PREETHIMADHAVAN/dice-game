import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import './StartGame.css';




const StartGame = (props) => {
  return (
    // <div className='startGameContainer'>
    //     <div>
    //         <img src="images/homepage_dices.png" alt="dices" />
    //     </div>
    //     <div>
    //       <h1>DICE GAME</h1>
    //       <Button>Play Now</Button>
    //     </div>
    // </div>

    <Container>
      <div>
      <img src="images/homepage_dices.png" alt="dices" />

      </div>
           <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={props.onPlayGame}>Play Now</Button>
         </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
align-items: center;
margin: 0 auto;
height: 100vh;

.content h1{
  font-size: 96px;
  white-space: nowrap;
}
  
`

