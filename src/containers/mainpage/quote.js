import React from 'react';
import styled from 'styled-components'

const Section = styled.div`
background-color: #e9e9f7;
margin-top: -130px;
width: 100%;
height: 560px;
position: relative;
`
const Text = styled.div`
margin-left: 18%;
margin-right: 18%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Quote = () => {
return (
    <Section>
        <Text>
    <p className="quote">Quote lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </Text>
    </Section>
);
}


export default Quote;