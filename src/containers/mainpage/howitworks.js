import React from 'react';
import styled from 'styled-components'

const Explain = styled.div`
width: 100%;
height: 80vh;
`

const Cards = styled.div`
width: 70%;
display: flex;
flex-direction: wrap;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
`

const CardContent = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 200px;
`

const CardLeft = styled.div`
width: 30%;
background: #e99e9f;
border-radius: 20px;
`

const CardCenter = styled.div`
width:30%;
background: #f0cfcd;
border-radius: 20px;
margin-left: auto;
margin-right: auto;
`

const CardRight = styled.div`
width:30%;
background: #b1abd4;
border-radius: 20px;
`

const HowItWorks = () => {
return (
    <Explain>
    <h2>How It Works</h2>
    <Cards>
        <CardLeft>
            <CardContent>
            <p className="CardTittle">lorem ipsum dolor</p>
            <p className="CardText">lorem ipsum dolor sit amet consectetur adipisicing</p>
            </CardContent>
        </CardLeft>
        <CardCenter>
            <CardContent>
            <p className="CardTittle">consectetur adipisicing</p>
            <p className="CardText">consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            </CardContent>
        </CardCenter>
        <CardRight>
            <CardContent>
            <p className="CardTittle">labre et dolore magna</p>
            <p className="CardText">ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </CardContent>
        </CardRight>
    </Cards>
    </Explain>
);
}


export default HowItWorks;