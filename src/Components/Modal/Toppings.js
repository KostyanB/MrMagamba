import React, { useContext } from 'react';
import { ContextItem } from '../Functions/context';
import styled from 'styled-components';
import { SelectWrap, SelectLabel } from '../Styled/Components';

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Toppings() {

    const { toppings: { toppings, checkToppings } } = useContext(ContextItem)
    return (
        <>
        <h3>Добавки:</h3>
        <SelectWrap>
            {toppings.map((item, i) => (
                <SelectLabel key={i}>
                    <ToppingCheckbox
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)} //передали index топпинга
                        />
                    {item.name}
                </SelectLabel>
            ))}
        </SelectWrap>
        </>
    )
};