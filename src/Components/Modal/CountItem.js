import React, { useContext } from 'react';
import { ContextItem } from '../Functions/context';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CountInput = styled.input`
    width: 40px;
    font-size: 20px;
    background-color: #33d9de;
    border: none;
    text-align: center;
`;
const ButtonCount = styled.button`
    background-color: #002878;
    border: none;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    color: #33d9de;
`;
const Span = styled.span`
    @media (max-width: 376px) {
        display: none;
    }
`;
const InputCount = styled.div`
    @media (max-width: 376px) {
        margin: 0 auto;
    }
`;

export function CountItem() {

    const { counter: { count, onChange, validCount } } = useContext(ContextItem)
    return (
        <CountWrapper>
            <Span>Количество</Span>
            <InputCount>
                <ButtonCount disabled={count <= 1} onClick={() => validCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' min='1' max='100' onChange={onChange}
                            value={count}/>
                <ButtonCount disabled={count >= 100} onClick={() => validCount(+count + 1)}>+</ButtonCount>
            </InputCount>
        </CountWrapper>
    )
};