const axios = require('axios');
const express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));

app.listen(port, function(){
    console.log("t시작");
})

//http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=ibNDydv%2BVD1XxdnbSBCwRIZ4nfiYnptFv6FveU0wGfu4yRPisWSg%2F1gRJgdgRxOvOm6DlzNjTEJrjZkDyxNwbw%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&Q1=%EA%B0%95%EB%82%A8%EA%B5%AC&QT=1&QN=%EC%82%BC%EC%84%B1%EC%95%BD%EA%B5%AD&ORD=NAME&pageNo=1&numOfRows=10

app.get("/pharmach_list", (req, res)=>{
    let api = async() => {
        let response = null;
        try{
            response = await axios.get("http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",{
                params:{
                    "serviceKey" : "ibNDydv+VD1XxdnbSBCwRIZ4nfiYnptFv6FveU0wGfu4yRPisWSg/1gRJgdgRxOvOm6DlzNjTEJrjZkDyxNwbw==",
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