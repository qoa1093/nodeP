const axios = require('axios');
const express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));

app.listen(port, function(){
    console.log("t시작");
})

//http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=ibNDydv%2BVD1XxdnbSBCwRIZ4nfiYnptFv6FveU0wGfu4yRPisWSg%2F1gRJgdgRxOvOm6DlzNjTEJrjZkDyxNwbw%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&Q1=%EA%B0%95%EB%82%A8%EA%B5%AC&QT=1&QN=%EC%82%BC%EC%84%B1%EC%95%BD%EA%B5%AD&ORD=NAME&pageNo=1&numOfRows=10

app.get("/paramach_list", (req, res)=>{
    let api = async() => {
        axios.get("http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire",{
            params:{
                "serviceKey" : "ibNDydv%2BVD1XxdnbSBCwRIZ4nfiYnptFv6FveU0wGfu4yRPisWSg%2F1gRJgdgRxOvOm6DlzNjTEJrjZkDyxNwbw%3D%3D",
                "Q0":"서울특별시",
                "Q1":"강남구",
                "QT":"",
                "QN":"",
                "ORD":"",
                "pageNo":"1",
                "numOfRows":"10000"
           
            }
        })
    }

});