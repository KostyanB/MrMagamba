import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { formatCurrency } from '../Functions/secondaryFunc';
import { totalPriceItems } from '../Functions/secondaryFunc';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 4px 0px 5px rgba(0, 40, 120, 0.25);
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
    width: 120px;
    margin-left: 5px;
`;
const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order)=> //к-во товара
                totalPriceItems(order) + result, 0)

    const totalCounter = orders.reduce((result, order)=> //ощее к-во товаров
                        order.count + result, 0)
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                { orders.length ?  //проверка наличия заказов
                <OrderList>       {/*перебираем и добав заказы*/}
                    { orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}
                            />) }
                </OrderList> : //иначе если список пуст
                <EmptyList>Список заказов пуст</EmptyList> }
            </OrderContent>
            <Total>
                <span>Итого:</span>
                <span>{totalCounter} шт.</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}