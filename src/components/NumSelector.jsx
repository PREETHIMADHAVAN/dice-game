import React from 'react'
import styled from 'styled-components'

const NumSelector = ({err, setErr, selectedNum,setSelectedNum}) => {

    const arr = [1,2,3,4,5,6];
    console.log(selectedNum)

    const numSelectHandler = (val) =>{
        setSelectedNum(val);
        setErr("")
    }
  return (
    <NumSelectorContainer>
        <p className='err'>{err}</p>
    <div className='boxContainer'>
        {arr.map((val,index) =>{
            return <Box 
            isSel={val == selectedNum}
            key={index} 
            onClick={() => numSelectHandler(val)}
            >{val}</Box>
        })}
        
        
    </div>
    <p>Select Number</p>
    </NumSelectorContainer>
  )
}

export default NumSelector

const NumSelectorContainer = styled.div`
    .boxContainer{
        display:flex;
        gap:24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
        text-align: right;
    }
    .err{
        color: red;
    }
    
`;

const Box = styled.div.withConfig({
    shouldForwardProp:(prop) => prop !='isSel'
})`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 700;
    background-color: ${(props) => (props.isSel ? 'black':'white')};
    color: ${(props) => (props.isSel ? 'white':'black')};
`