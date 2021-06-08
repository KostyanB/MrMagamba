import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunc';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

`;
const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({ img }) => `url(${img})`}; {/*{ img }- деструкт props */}
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

export const ListItem = ({ itemList }) => {

    const { openItem: { setOpenItem } } = useContext(Context);

    return (
        <List>
            {itemList.map(item => (
                <Item
                    key={item.id}
                    img={item.img}
                    onClick={() => setOpenItem(item)}>
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                </Item>
            ))}
        </List>
    )
};