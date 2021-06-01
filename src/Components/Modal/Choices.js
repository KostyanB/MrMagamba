import React from 'react';
import styled from 'styled-components';
import { SelectWrap, SelectLabel } from './selectionWrapper';

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выберите:</h3>
            <SelectWrap>
                {openItem.choices.map(item => (
                    <SelectLabel key={item}>
                        <ChoiceRadio
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                            />
                        {item}
                    </SelectLabel>
                ))}
            </SelectWrap>
        </>
    )
}