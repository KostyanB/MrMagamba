import React from 'react';

export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});


export const totalPriceItems = order => order.price * (order.count < 1 ? 1 :
                                                        order.count > 100 ? 100 :
                                                        order.count);