import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import { Overlay, ModalSmall, OrderTitle, Total, TotalPrice } from '../Styled/Components';
import { ButtonCheckout } from '../Styled/Buttons';
import { formatCurrency, totalPriceItems, projection } from '../Functions/secondaryFunc';

// правила обработки заказа
const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
            arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
};

const sendOrder = (dataBase, orders, authentification, setOpenThanks) => {
    const newOrder = orders.map(projection(rulesData));

    dataBase.ref('orders').push().set({
        nameClient: authentification.displayName,
        email: authentification.email,
        order: newOrder
    });
    setOpenThanks(true);

};

export const OrderConfirm = () => {

    const { auth: { authentification },
        orders: { orders, setOrders },
        orderConfirm: { setOpenOrderConfirm },
        thanks: { setOpenThanks },
        firebaseDatabase
    } = useContext(Context);
    const dataBase = firebaseDatabase();


    const total = orders.reduce((result, order)=> //к-во товара
                totalPriceItems(order) + result, 0);

    const closeModal = e => (e.target.id === 'confirm-overlay') && setOpenOrderConfirm(false);

    return (
        <Overlay id="confirm-overlay" onClick={closeModal}>
            <ModalSmall>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <OrderTitle>Подтвердите Ваш заказ</OrderTitle>
                <Total>
                    <span>Общая сумма:</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                        setOpenOrderConfirm(false);
                        sendOrder(dataBase, orders, authentification, setOpenThanks);
                        setOrders([]);

                    }}>
                    Подтвердить
                </ButtonCheckout>
            </ModalSmall>
        </Overlay>
    );
};