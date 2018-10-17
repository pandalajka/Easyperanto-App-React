import React from 'react';
import About from './about';
import styled from 'styled-components'

const Header = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
position: center;`


const Buttons = styled.div`
display: flex;
flex-direction: row;
position: center;
align-items: center;
margin-left: auto;
margin-right: auto;
`


export const MainHeader = () => {
  return (
    <Header>
        <div className="headerLeft">
            <h1>Easyperanto App</h1>
            <About />
            <Buttons>
            <button><a href="/lessons">Get started now</a></button> <div className="googleplay"><a href="#"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"></img></a></div>
            </Buttons>
        </div>
        <div className="headerRight" />
    </Header>
  );
}