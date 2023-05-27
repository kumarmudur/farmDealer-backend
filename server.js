const express = require('express');

const app = express();

const port = process.env.port || 8080;

app.use(express.json());

app.use('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})