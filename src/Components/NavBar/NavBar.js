import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user.svg';
import { ButtonLog } from '../Styled/Buttons';

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
    @media (max-width: 376px) {
        display: none;
    }
`;
const ImgLogo = styled.img`
    width: 70px;
    @media (max-width: 240px) {
        display: none;
    }
`;
const UserLog = styled.div`
    display: flex;
    align-items: center;
`;
const Welcome = styled.p`
    margin-right: 10px;
    width: 120px;
    text-align: center;
    @media (max-width: 576px) {
        display: none;
    }
`;

export const NavBar = () => {

    const { auth: { authentification, logIn, logOut } } = useContext(Context);
    // вместо const { authentification, logIn, logOut } = auth;
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrMagamba®</H1>
            </Logo>
            {authentification ?
            <UserLog onClick={logOut}>
                <Welcome>{authentification.displayName}</Welcome>
                <ButtonLog>X</ButtonLog>
            </UserLog> :
            <UserLog onClick={logIn}>
                <Welcome>Войти</Welcome>
                <ButtonLog>
                    <img src={userImg} alt="Поесть"></img>
                </ButtonLog>
            </UserLog>
            }
        </NavBarStyled>
    )
}