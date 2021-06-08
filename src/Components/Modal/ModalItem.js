import React, { useContext } from 'react';
import { Context, ContextItem } from '../Functions/context';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/Buttons';
import { Banner, Overlay } from '../Styled/Components';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunc';
import { Toppings } from '../Modal/Toppings';
import { Choices } from '../Modal/Choices';

const Modal = styled.div`
    background-color: #33d9de;
    width: 600px;
    height: fit-content;
    color: #002878;
`;
const ModalBanner = styled(Banner)`
    height: 200px;
    background-image: url(${({ img }) => img});
`;
const Content = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`;
const HeaderContent = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pacifico', cursive;
`;
const TotalPriceItem = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = () => {

    const { openItem: { openItem, setOpenItem },
            orders: { orders, setOrders } } = useContext(Context);

    //передаем исх количество при откр мод
    const counter = useCount(openItem.count),
        toppings = useToppings(openItem),
        choices = useChoices(openItem);
    //true если из заказов, из меню index - undef -> false
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };
    const order = {
        ...openItem, // передали все свойства
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    const addToOrder = () => {
        setOrders([...orders, order]); //новый заказ в конец массива старых
        setOpenItem(null); //закрыли модалку
    };

    return (
        <ContextItem.Provider value={{
            choices,
            toppings,
            counter,
        }}>
        <Overlay id="overlay" onClick={closeModal}>
            <Modal id="modal">
                <ModalBanner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem/> {/*выводим только если есть*/}
                    {openItem.toppings && <Toppings/>}
                    {openItem.choices && <Choices/>}
                    <TotalPriceItem>
                        <span>Цена</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout
                        onClick={isEdit ? editOrder : addToOrder}
                        disabled={order.choices && !order.choice}
                        >{isEdit ? 'Изменить' : 'Добавить'}</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
        </ContextItem.Provider>
    )
};
