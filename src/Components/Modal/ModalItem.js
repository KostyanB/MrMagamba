import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { formatCurrency } from '../Functions/secondaryFunc';
import { totalPriceItems } from '../Functions/secondaryFunc';
import { Toppings } from '../Modal/Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Choices } from '../Modal/Choices';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;
const Modal = styled.div`
    background-color: #33d9de;
    width: 600px;
    height: 600px;
    color: #002878;
    /*box-shadow: 0px 0px 5px 3px rgba(0, 40, 120, 0.3);*/
`;
const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount(openItem.count); //передали исх количество при откр мод
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1; //true если из заказов, из меню index - undef -> false

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }
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
    }

    const addToOrder = () => {
        setOrders([...orders, order]); //новый заказ в конец массива старых
        setOpenItem(null); //закрыли модалку
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>} {/*выводим только если есть*/}
                    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
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
    )
};
