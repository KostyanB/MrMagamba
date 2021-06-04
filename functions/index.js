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

tranporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `MrMagamba <${email}>`,
        to: data.email,
        subject: `Ваш заказ из MrMagamba`,
        html: `
            <div>
                <h2>Добрый день! ${data.nameClient}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${data.order.map(({ itemName, count, price }) => (
                        `<li>${itemName} - ${count} шт., цена ${price * count} руб.</li>`
                    ))}
                </ul>
                <p>Итого: ${data.order.reduce((sum, item) =>
                    sum + (item.price + item.count), 0)} руб.</p>
                <small>Ожидайте курьера.</small>
            </div>
        `,
    };
    tranporter.sendMail(options);
}




exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));