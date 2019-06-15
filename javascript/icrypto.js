$(document).ready(function() {
    

    
console.log("Group Project 1 \n Jon Palmer \n Lazontez Gardner \n Marlon Umeadi");

setInterval(updateClock, 1000);
function updateClock (){
    var currentTime = new Date( );
     var currentHours = currentTime.getHours( );
     var currentMinutes = currentTime.getMinutes( );
     var currentSeconds = currentTime.getSeconds( );

     // Pad the minutes and seconds with leading zeros, if required
     currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
     currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

     // Choose either "AM" or "PM" as appropriate
     var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

     // Convert the hours component to 12-hour format if needed
     currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

     // Convert an hours component of "0" to "12"
     currentHours = ( currentHours == 0 ) ? 12 : currentHours;

     // Compose the string for display
     var currentTimeString = currentTime;
     $("#clock").html(currentTimeString);
     
     
      
}
updateClock();






























// ***              Tez code here        ***
// CryptoControl API
var usersInput;
//Users coin array
var usersCoins = []
//var for the news title
var newsTitle;
//var for the story url
console.log(usersInput)
$("#button-addon1").on("click", usersNews)
function usersNews() {
    event.preventDefault();
    //makes a variable called userInput with the value of the input box
    usersInput = $("#userInput").val().toLowerCase();

    addUsersCointoArray()

    //Crypto Control Api key
    var cryptoCntrlApi_key = "cec0cc48894cba4ec6f690b99efc0bc7"
    //Url to connect to crypto control
    var cryptoCntrlUrl = "https://cryptocontrol.io/api/v1/public/news/coin/" + usersInput + "?key=" + cryptoCntrlApi_key
    console.log("UsersInput---" + usersInput)
    console.log(cryptoCntrlUrl)
    $.ajax({
        url: cryptoCntrlUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (var x = 0; x < 2; x++) {
            //Name of the coin that the user searched
            var coinName = response[0].coins[0].name
            //News Header
            newsTitle = response[x].title
            storyUrl = response[x].url
            console.log(coinName)
            console.log("News Title- " + newsTitle)
            addNewsSection(storyUrl, newsTitle)
            $("#userInput").val("")
            
        }
    }, function (error) {
        
        //Dynamically create a bootstrap toast element
        var errorDisplay = $("<div>")
        var errorDisplayExit=$("<button>")
        errorDisplayExit.attr({
            "class":"ml-2 mb-1 close",
            "data-dismiss":"toast",
            
        })
        errorDisplayExit.text("x")
        errorDisplayExit.css({
            "padding-left": "220px"

        })
        errorDisplay.attr("class", "toast")
        errorDisplay.attr("role", "alert")
        errorDisplay.attr("data-autohide", "false")
        errorDisplay.css({
            "color":"red"
        })
        var toast = $("<div>")
        toast.text("iCrypto Alert")
        toast.append(errorDisplayExit)
        toast.attr("class", "toast-header")
        var toastBody = $("<div>")
        toastBody.attr("class", "toast-body")
        errorDisplay.append(toast)
        errorDisplay.append(toastBody)
        var errorStatus = error.status
        toastBody.text("Coin not found in database. Be sure spelling is correct.")
        $("#errorBox").append(errorDisplay)
        $(".toast").toast("show")
        // alert(errorStatus)

    });
}


function addNewsSection(url, title) {
    var news = $("<tr />")
    var newsLink = $("<a />")
    newsLink.attr("href",url)
    news.attr("class", "list-group-item bg-dark")
    newsLink.html(title)
    news.append(newsLink[0])
    console.log(newsLink[0])
    $("#newsBox").prepend(news[0]);
    // debugger;
}
function addUsersCointoArray() {
    usersCoins.push(usersInput)
}




























// ***              Marlon code here            ***
// CoinAPI
// var cmkApiKey = "..."


var coinApiUrl = "https://rest.coinapi.io/v1/exchangerate/BTC/"
var coinApiKey = "14225887-81E7-4652-97A8-B4463485B47D"

$.ajax({
    beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Accept", "application/json");
        xhrObj.setRequestHeader("X-CoinAPI-Key", "14225887-81E7-4652-97A8-B4463485B47D");
        xhrObj.setRequestHeader("Access-Control-Allow-Origin", "*")
    },
    url: coinApiUrl,
    method: "GET",
    // header: "X-CoinAPI-Key: 14225887-81E7-4652-97A8-B4463485B47D"

}).then(function (response) {




})






});






































