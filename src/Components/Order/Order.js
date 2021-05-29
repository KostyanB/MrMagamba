import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;
const OrderTitle = styled.h2`
    text-align: center;
    font-weight: 400;
    line-height: 68px;
    margin-bottom: 30px;
`;
const OrderContent = styled.div`
    flex-grow: 1; {/*растянуть контент */}
`;
const OrderList = styled.ul`

`;
const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;
const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;
const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders }) => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                { orders.length ?  //проверка наличия заказов
                <OrderList>
                    { orders.map(order => <OrderListItem order={order}/>) } {/*перебираем и добав заказы*/}
                </OrderList> : //иначе если список пуст
                <EmptyList>Список заказов пуст</EmptyList> }
            </OrderContent>
            <Total>
                <span>итого</span>
                <span>5</span>
                <TotalPrice>850руб</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}