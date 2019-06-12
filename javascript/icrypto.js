console.log ("Group Project 1 \n Jon Palmer \n Lazontez Gardner \n Marlon Umeadi");


// ***             Jon code here         ***
// Twitter API
// var twitterApiKey = "..."





























// ***              Tez code here        ***
// Vectorspace API
// var vsApiKey = "..."




























// ***              Marlon code here            ***
// Coinmarketcap
// var cmkApiKey = "..."

var cmkUrl ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1"
var cmkKey ="d8dea55a-8f6d-4cc5-8e53-b204e14c7e57"

$.ajax({
    beforeSend: function(xhrObj){
        xhrObj.setRequestHeader("Accept","application/json");
        xhrObj.setRequestHeader("X-CMC_PRO_API_KEY","d8dea55a-8f6d-4cc5-8e53-b204e14c7e5");
        xhrObj.setRequestHeader("Access-Control-Allow-Origin","*")
},
    url: cmkUrl,
    method: "GET"
}).then(function(response) {
    console.log(response)

})





































