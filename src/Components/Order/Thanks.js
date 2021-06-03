import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';
import { Overlay, ModalSmall, OrderTitle } from '../Styled/Components';
import { ButtonCheckout } from '../Styled/Buttons';

const ThanksModal = styled(ModalSmall)`
    background-color: #002878;
    color: #33d9de;
`;
const ButtonThanks = styled(ButtonCheckout)`
    box-shadow: 0 16px 32px 0 rgba(51, 217, 222, .35);
`;
export const Thanks = () => {

    const { auth: { authentification },
            thanks: { setOpenThanks } } = useContext(Context);

    const closeThanks = e => {
        if(e.target.id === 'thanks-overlay') {
            setOpenThanks(false);
        }
    }
    return (
        <Overlay id="thanks-overlay" onClick={closeThanks}>
            <ThanksModal>
                <OrderTitle>Спасибо за Ваш заказ,</OrderTitle>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <ButtonThanks onClick={() => setOpenThanks(false)}>
                    Закрыть
                </ButtonThanks>
            </ThanksModal>
        </Overlay>
    )
}