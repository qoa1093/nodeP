const axios = require('axios');
const express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));

app.listen(port, function(){
    console.log("t시작");
})



app.get("/pharmach_list",(req, res)=>{
    let api = async() => {
        let response = null;
        try{
            const { serviceKey } = await import('./service.js');
            response = await axios.get("http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",{
                params:{
                    "serviceKey" : serviceKey,
                    "Q0":req.query.Q0,
                    "Q1":req.query.Q1,
                    "QT":req.query.QT,
                    "QN":req.query.QN,
                    "ORD":req.query.ORD,
                    "pageNo":req.query.pageNo,
                    "numOfRows":req.query.numOfRows
               
                }
                //headers:{"Accept-Encoding":"application/json"},
            })
        }
            catch(e){
                console.log(e);
            }
            return response;
        }
        api().then((response)=>{
            res.setHeader("Access-Control-Allow-Origin","*")
            res.json(response.data.response.body);
        });
    
});