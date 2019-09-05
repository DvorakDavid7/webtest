const express = require('express');
const app = express();
const port = process.env.PORT;

app.listen(port, function () {
    console.log("listening...")
});

app.use(express.static('public'))
