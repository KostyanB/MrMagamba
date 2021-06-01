import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import { formatCurrency } from '../Functions/secondaryFunc';
import { totalPriceItems } from '../Functions/secondaryFunc';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    cursor: pointer;

`;
const ItemName = styled.span`
    flex-grow: 1;
`;
const ItemPrice = styled.span`
    margin-left: 5px;
    margin-right: 10px;
    width: 120px;
    text-align: right;
`;
const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;
const Choices = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ( { order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');

    const refDelBtn = useRef(null); //стандарт хук не рендерит(сохр ссылку на эл-т)

    return (
        <OrderItemStyled onClick={(e) => e.target !== refDelBtn.current &&
                        setOpenItem({...order, index})}> {/*откр модал кликом по заказу*/}
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDelBtn} onClick={() => deleteItem(index)}/>
            {topping && <Toppings>Добавки: {topping}</Toppings>}
            {order.choice && <Choices>Ваш выбор: {order.choice}</Choices>}

        </OrderItemStyled>
    )
};