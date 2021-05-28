import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';


const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px; {/*высота NavBar*/}
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const MenuHeader = styled.h2`
    font-size: 32px;
    color: #002878;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <MenuHeader>Бургеры</MenuHeader>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
        </SectionMenu>
        <SectionMenu>
            <MenuHeader>Закуски / Напитки</MenuHeader>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
        </SectionMenu>


    </MenuStyled>


);