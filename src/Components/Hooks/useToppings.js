import { useState } from 'react';

// преобразовываем [] с топпингами в объект с key
const getTopping = toppings => toppings.map(item => ({
        name: item,
        checked: false,
})); // получим [{name: 'Лук', checked: false}, {name: 'Соус', checked: false}]


export function useToppings(openItem) {

    const readyTopping = openItem.topping ? openItem.topping : //были?  -их и вернем
                        openItem.toppings ? getTopping(openItem.toppings) :
                        []; //наличие топпингов?
    const [toppings, setToppings] = useState(readyTopping);

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            const newItem = {...item}  // при работе с hooks можно без new
            if (i === index) {
                newItem.checked = !newItem.checked
            }
            return newItem;
        }))
    };

    return {toppings, checkToppings};
};