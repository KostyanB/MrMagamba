import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 5px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;



export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выберите:</h3>
            <ChoiceWrap>
                {openItem.choices.map(item => (
                    <ChoiceLabel key={item}>
                        <ChoiceRadio
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                            />
                        {item}
                    </ChoiceLabel>
                ))}

            </ChoiceWrap>
        </>
    )
}