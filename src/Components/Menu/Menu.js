import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from '../Styled/Components';
import { useFetch } from '../Hooks/useFetch';
import bannerImg from '../../image/banner.png';
import { Preloader, ErrorLoad } from '../Styled/Preloader'

const MenuStyled = styled.section`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
    width: calc(100% - 380px);
    height: calc(100% - 80px);
    @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
    }
`;
const SectionMenu = styled.section`
    padding: 30px;
`;
const MenuHeader = styled.h2`
    font-size: 32px;
    color: #002878;
`;
const MenuBanner = styled(Banner)`
    background-image: url(${bannerImg});
    height: 210px;
`;

export const Menu = () => {

    const res = useFetch();
    const dbMenu = res.responce;

    return (
        <MenuStyled>
            <MenuBanner/>
            {res.responce ?
            <>
            <SectionMenu>
                <MenuHeader>Бургеры</MenuHeader>
                <ListItem itemList={dbMenu.burger}/>
            </SectionMenu>
            <SectionMenu>
                <MenuHeader>Закуски / Напитки</MenuHeader>
                <ListItem itemList={dbMenu.other}/>
            </SectionMenu>
            </> : res.error ?
            <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad> :
            <Preloader/>
            }
        </MenuStyled>
    )
};