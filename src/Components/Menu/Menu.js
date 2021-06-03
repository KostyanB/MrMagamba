import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from '../Styled/Components';
import { useFetch } from '../Hooks/useFetch';
import bannerImg from '../../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
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
            <div>Sorry, we will fix it soon...</div> :
            <div>Loading...</div>
            }
        </MenuStyled>
    )
};