import React from 'react';
import styled from 'styled-components';
import { SelectWrap, SelectLabel } from './selectionWrapper';

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Toppings( {toppings, checkToppings}) {
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
}