import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';

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

export const Menu = ({ setOpenItem }) => {

    const res = useFetch();
    const dbMenu = res.responce;

    return (
        <MenuStyled>
            <Banner/>
            {res.responce ?
            <>
            <SectionMenu>
                <MenuHeader>Бургеры</MenuHeader>
                <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
            </SectionMenu>
            <SectionMenu>
                <MenuHeader>Закуски / Напитки</MenuHeader>
                <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
            </SectionMenu>
            </> : res.error ?
            <div>Sorry, we will fix it soon...</div> :
            <div>Loading...</div>
            }
        </MenuStyled>
    )
};