const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(" done all");
})

app, listen(port, () => {
    console.log("listening the port")
})