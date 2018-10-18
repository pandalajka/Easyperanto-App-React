import React from 'react';
import './pagenotfound.css';
import styled from 'styled-components'


const Section = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
position: center;`


export const PageNotFound = () => {
return (
    <Section>
        <div className="SectionLeft">
        <h1>Ooops! Not found!</h1>
        <p>Let's go <a href="/Easyperanto-App-React/">home</a>.</p>
        </div>
        <div className="SectionRight" />
    </Section>
);
}