import React from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Styled/Components';
import { ButtonApprove } from '../Styled/Buttons';
import { formatCurrency, totalPriceItems, projection } from '../Functions/secondaryFunc';

const Modal = styled.div`
    background-color: #33d9de;
    color: #002878;
    width: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;
const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = { // правила обработки заказа
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
            arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
};

const sendOrder = (dataBase, orders, authentification) => {
    const newOrder = orders.map(projection(rulesData));

    dataBase.ref('orders').push().set({
        nameClient: authentification.displayName,
        email: authentification.email,
        order: newOrder
    });
};

export const OrderConfirm = ({
        orders, setOrders,
        authentification,
        setOpenOrderConfirm,
        firebaseDatabase,
    }) => {
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=> //к-во товара
                totalPriceItems(order) + result, 0);

    const closeModal = e => {
        if(e.target.id === 'confirm-overlay') {
            setOpenOrderConfirm(false);
        }
    }
    return (
        <Overlay id="confirm-overlay" onClick={closeModal}>
            <Modal>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <Text>Подтвердите Ваш заказ</Text>
                <Total>
                    <span>Общая сумма:</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonApprove onClick={() => {
                        setOpenOrderConfirm(false);
                        sendOrder(dataBase, orders, authentification);
                        setOrders([]);
                    }}>
                    Подтвердить
                </ButtonApprove>
            </Modal>
        </Overlay>
    )
}