console.log("Group Project 1 \n Jon Palmer \n Lazontez Gardner \n Marlon Umeadi");


// ***             Jon code here         ***
// Twitter API
// var twitterApiKey = "..."





























// ***              Tez code here        ***
// CryptoControl API
var usersInput;
console.log(usersInput)
$("#button-addon1").on("click", usersNews)
function usersNews() {
    event.preventDefault();
    //makes a variable called user-input with the value of the input box
    usersInput = $("#userInput").val();
    //Crypto Control Api key
    var cryptoCntrlApi_key = "cec0cc48894cba4ec6f690b99efc0bc7"
    //Url to connect to crypto control
    var cryptoCntrlUrl = "https://cryptocontrol.io/api/v1/public/news/coin/" + usersInput + "?key=" + cryptoCntrlApi_key
    console.log(usersInput)
    console.log(cryptoCntrlUrl)
    $.ajax({
        url: cryptoCntrlUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var coinName = response[0].coins[1].name
        var coinSymbol = response[0].coins[1].tradingSymbol
        var newsTitle = response[0].title
        var similiarArticles = response[0].similarArticles[0]
        console.log(coinName)
        console.log(coinSymbol)
        console.log(newsTitle)
        console.log(similiarArticles)
    });
    $("#userInput").val("")
}


























// ***              Marlon code here            ***
// Coinmarketcap
// var cmkApiKey = "..."

var cmkUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1"
var cmkKey = "d8dea55a-8f6d-4cc5-8e53-b204e14c7e57"

$.ajax({
    beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Accept", "application/json");
        xhrObj.setRequestHeader("X-CMC_PRO_API_KEY", "d8dea55a-8f6d-4cc5-8e53-b204e14c7e5");
        xhrObj.setRequestHeader("Access-Control-Allow-Origin", "*")
    },
    url: cmkUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)

})





































