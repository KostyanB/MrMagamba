import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/Buttons';
import { OrderTitle, Total, TotalPrice } from '../Styled/Components';
import { OrderListItem } from './OrderListItem';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunc';

const OrderStyled = styled.section`
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #ddd;
    position: fixed;
    height: calc(100% - 80px);
    width: 380px;
    box-shadow: 5px 0px 5px rgba(0, 40, 120, 0.25);
    padding: 20px;
    @media (max-width: 768px) {
    position: relative;
    height: fit-content;
    width: 100%;
    box-shadow: 0px 5px 5px rgba(0, 40, 120, 0.25);
  }

`;
const OrderContent = styled.div`
    flex-grow: 1; {/*растянуть контент */}
`;
const OrderList = styled.ul`

`;
const EmptyList = styled.p`
    text-align: center;

`;

export const Order = () => {

    const { auth: { authentification, logIn },
        orders: { orders, setOrders },
        orderConfirm: { setOpenOrderConfirm } } = useContext(Context);

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    };

    const total = orders.reduce((result, order)=> //к-во товара
                totalPriceItems(order) + result, 0)

    const totalCounter = orders.reduce((result, order)=> //ощее к-во товаров
                        +order.count + result, 0)

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
                            />) }
                </OrderList> : //иначе если список пуст
                <EmptyList>Список заказов пуст</EmptyList> }
            </OrderContent>
            {orders.length ?
                <>
                <Total>
                    <span>Итого:</span>
                    <span>{totalCounter} шт.</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => authentification ? setOpenOrderConfirm(true)
                                                                : logIn()}>
                Оформить</ButtonCheckout>
                </> :
                null
            }
        </OrderStyled>
    );
};