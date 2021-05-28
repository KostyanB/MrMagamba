import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/user 1.svg';


const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #33d9de;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 30px;
    margin-left: 15px;
    color: #002878;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const BtnLogin = styled.button`
    display: inline-block;
    margin: 0 30px;
    padding: 6px 20px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrMagamba®</H1>
        </Logo>
        <BtnLogin>
            <img src={userImg} alt="Поесть"></img>
        </BtnLogin>
    </NavBarStyled>
)