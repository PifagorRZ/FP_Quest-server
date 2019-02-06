import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/result', urlencodedParser, (req, res) => {
    if (!req.body) {
        res.sendStatus(400);
    }
    res.send(`Ваш заказ принят
    Заказано изделие: ${req.body.type}
    Материал ${req.body.material}
    Количество ${req.body.amount}`)

})

app.get('/', urlencodedParser, (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000);

