import React from 'react';
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

export function CountItem({ count, setCount, onChange }) {
    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type='number' max='100' value={count < 1 ? 1 : count > 100 ? 100 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>

    )
}