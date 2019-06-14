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
        var storyUrl= response[0].url
        console.log(coinName)
        console.log(coinSymbol)
        console.log("News Title----"+newsTitle)
        console.log(similiarArticles)
    });
    $("#userInput").val("")
}


























// ***              Marlon code here            ***
// CoinAPI
// var cmkApiKey = "..."


var coinApiUrl ="https://rest.coinapi.io/v1/exchangerate/BTC/"
var coinApiKey ="14225887-81E7-4652-97A8-B4463485B47D"

$.ajax({
    beforeSend: function(xhrObj){
     xhrObj.setRequestHeader("Accept","application/json");
     xhrObj.setRequestHeader("X-CoinAPI-Key","14225887-81E7-4652-97A8-B4463485B47D");
 xhrObj.setRequestHeader("Access-Control-Allow-Origin","*")
 },
    url: coinApiUrl,
    method: "GET",
    // header: "X-CoinAPI-Key: 14225887-81E7-4652-97A8-B4463485B47D"

}).then(function(response) {


})





































