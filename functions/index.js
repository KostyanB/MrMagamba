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
                        (choice === 'no choices') ? choice = '' : choice = `Ваш выбор: ${choice}`;

                        (topping === 'no topping') ? topping = '' : function(){
                            price = price + (price * 0.1 * topping.length);
                            topping = `Добавки: ${topping.join(', ')}`;
                        }();

                        total += price * count;
                        return (
                            `<li>${itemName}: - ${count} шт., по цене ${formatCurrency(price)}. ${choice}${topping}</li>`
                            );
                    }).join('')}
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
