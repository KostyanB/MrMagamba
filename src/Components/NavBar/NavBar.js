import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user.svg';
import { ButtonCheckout } from '../Styled/ButtonCheckout';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #33d9de;
    box-shadow: 0px 4px 5px rgba(0, 40, 120, 0.25);
    color: #002878;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 30px;
    margin-left: 15px;
`;
const ImgLogo = styled.img`
    width: 70px;
`;
const LogIn = styled.div`
    display: flex;
    align-items: center;
`;
const Welcome = styled.p`
    margin-right: 10px;
`;

export const NavBar = ({ authentification, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrMagamba®</H1>
        </Logo>
        {authentification ?
        <LogIn onClick={logOut}>
            <Welcome>{authentification.displayName}</Welcome>
            <ButtonCheckout>X</ButtonCheckout>
        </LogIn> :
        <LogIn onClick={logIn}>
            <Welcome>Войти</Welcome>
            <ButtonCheckout>
                <img src={userImg} alt="Поесть"></img>
            </ButtonCheckout>
        </LogIn>
        }
    </NavBarStyled>
)