import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user.svg';

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
const BtnLogin = styled.button`
    display: inline-block;
    text-decoration: none;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    color: #002878;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    transition: .5s;
    padding: 8px 12px;
    margin-left: 10px;
    :hover {
        box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
        background-position: 0 0;
    }
`;
const LogIn = styled.div`
    display: flex;
    align-items: center;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrMagamba®</H1>
        </Logo>
        <LogIn>
            <span>Войти</span>
            <BtnLogin>
                <img src={userImg} alt="Поесть"></img>
            </BtnLogin>
        </LogIn>

    </NavBarStyled>
)