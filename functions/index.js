const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

const formatCurrency = val => val.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

tranporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    let total = 0;
    const options = {
        from: `MrMagamba <${email}>`,
        to: data.email,
        subject: `Ваш заказ из MrMagamba`,
        html: `
            <div>
                <h2>Добрый день! ${data.nameClient}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${data.order.map(({ itemName, count, price, choice, topping }) => {
                        if (choice !== 'no choices') {
                            choice = `Ваш выбор: ${choice}`;
                        } else {
                            choice = '';
                        }
                        if (topping !== 'no topping') {
                            price = price + (price * 0.1 * topping.length)
                            topping = `Добавки: ${topping.join(', ')}`;

                        } else {
                            topping = '';
                        }
                        total += price * count;
                        const liElem = `<li>${itemName}: - ${count} шт., по цене ${formatCurrency(price)}. ${choice}${topping}</li>`;
                        return liElem;
                    })}
                </ul>
                <p>Итого: ${formatCurrency(total)}</p>
                <small>Ожидайте курьера.</small>
            </div>
        `,
    };
    tranporter.sendMail(options);
}




exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => {
        console.log('order: ', order);

        sendOrderEmail(order.val())
    });