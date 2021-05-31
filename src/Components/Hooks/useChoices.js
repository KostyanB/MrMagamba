import { useState } from 'react';

// преобразовываем [] с топпингами в объект с key
//const getChoices = choice => choice.map(item => ({
         //name: item,
//         checked: false,
 //})) // получим [{name: 'Fanta', checked: false}, {name: 'Sprite', checked: false}]

export function useChoices() {

    //const readyChoice = openItem.choices ? getChoices(openItem.choices) : []; //наличие топпингов?
    const [choice, setChoice] = useState(); //(readyChoice);

    function changeChoices(e) {
        setChoice(e.target.value);
    }


    // const checkChoices = index => {
    //     setChoices(choices.map((item, i) => {
    //         const newItem = {...item}  // при работе с hooks можно без new
    //         if (i === index) {
    //             newItem.checked = !newItem.checked
    //         }
    //         return newItem;
    //     }))
    // }

    return {choice, changeChoices};
}