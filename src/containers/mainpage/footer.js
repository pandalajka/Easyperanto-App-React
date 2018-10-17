import React from 'react';
import styled from 'styled-components';
import social1 from '../../img/icons8-instagram-48.png';
import social2 from '../../img/icons8-twitter-48.png';
import social3 from '../../img/icons8-facebook-circled-filled-50.png';


const FooterSection = styled.div`
margin-top: 250px;
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-top: 1px solid #e5e3e3;
`

const SectionTop = styled.div`
margin-left: auto;
margin-right: auto;
`

const SectionBottom = styled.div`
`



const Footer = () => {
return (
    <FooterSection>
        <SectionTop>
            <ul className="footersocial">
            <li><a href="#"><img src={social1} alt="instagram icon" width="35" height="35" /></a></li>
            <li><a href="#"><img src={social3} alt="facebook icon" width="35" height="35" /></a></li>
            <li><a href="#"><img src={social2} alt="twitter icon"  width="35" height="35" /></a></li>
            </ul>
        </SectionTop>
        <SectionBottom>
        <p className="footertext">2018 | created with love by pandalajka</p>
        </SectionBottom>
    </FooterSection>
);
}


export default Footer;