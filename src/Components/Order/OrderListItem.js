import React from 'react';
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

export const OrderListItem = ( { order }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');



    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
            {topping && <Toppings>Добавки: {topping}</Toppings>}
            {order.choice && <Choices>Выбрано: {order.choice}</Choices>}

        </OrderItemStyled>




    )
};

