import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-around; {/*для переноса элем на нов строку*/}
    flex-wrap: wrap;

`;
const Item = styled.li`
    position: relative;
    width: 400px; {/*из верстки в figma*/}
    height: 155px;
    background-image: ${({ img }) => `url(${img})`}; {/*{ img } - это деструкт props */}
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 20px;
    padding: 15px;
    font-size: 24px;
    color: #33d9de;
    z-index: 1;
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px black;
        &:after {
            opacity: 0;
        }
    }
    &:after {  {/*псевдо-элем с затемнением на весь блок с img*/}
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: 40%;
        z-index: -1;
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item    /*key for rerender autentification objects*/
                key={item.id}
                img={item.img}
                onClick={() => setOpenItem(item)}>
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}</p>
            </Item>
        ))}

    </List>
);