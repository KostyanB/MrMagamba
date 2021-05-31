
export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const totalPriceItems = order => {

    const countTopping = order.topping && order.topping.filter(item => item.checked).length;

    //const countChoice = order.choise && order.choise.filter(item => item.checked).length;

    const priceTopping = (order.price * 0.1) * countTopping;

    return (order.price + priceTopping) * (order.count < 1 ? 1 : order.count > 100 ? 100 : order.count);
}