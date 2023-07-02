const axios = require('axios');
const express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));

app.listen(port, function(){
    console.log("t시작");
})