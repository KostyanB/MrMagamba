import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';


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
    display:flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
    color: #002878;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const Button = styled.button`
    text-decoration: none;
    display: inline-block;
    padding: 6px 20px;
    margin: 0 30px;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    font-family: Pacifico;
    font-size: 14px;
    color: #002878;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    transition: .5s;
    :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    }
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrMagamba®</H1>
        </Logo>
        <Button>ПОЕСТЬ</Button>
    </NavBarStyled>
)