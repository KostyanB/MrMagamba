import React, { useContext } from 'react';
import { Context, ContextItem } from '../Functions/context';
import styled from 'styled-components';
import { SelectWrap, SelectLabel } from '../Styled/Components';

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Choices() {

    const { openItem: { openItem } } = useContext(Context);
    const { choices: { choice, changeChoices } } = useContext(ContextItem);

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