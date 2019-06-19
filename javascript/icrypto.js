$(document).ready(function () {



    console.log("Group Project 1 \n Jon Palmer \n Lazontez Gardner \n Marlon Umeadi");

    setInterval(updateClock, 1000);
    function updateClock() {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = (currentHours == 0) ? 12 : currentHours;

        // Compose the string for display
        var currentTimeString = currentTime;
        $("#clock").html(currentTimeString);



    }
    updateClock();






























    // ***              Tez code here        ***
    // CryptoControl API
    var usersInput;
    //Users coin array
    var usersCoinsArray = [];
    //var for the news title
    var newsTitle;
    console.log("Users Input- " + usersInput);
    $("#button-addon1").on("click", usersNews);
    $("#button-addon1").on("click", addPriceData);
    function usersNews() {
        event.preventDefault();
        //assign the usersInput variable with the value of the Input box and turn those to lowercase letters
        usersInput = $("#userInput").val().toLowerCase();

        //run the addUSerstoArray function
        addUsersCointoArray();

        //Crypto Control Api key
        var cryptoCntrlApi_key = "cec0cc48894cba4ec6f690b99efc0bc7";
        //Url to connect to crypto control
        var cryptoCntrlUrl = "https://cryptocontrol.io/api/v1/public/news/coin/" + usersInput + "?key=" + cryptoCntrlApi_key;
        console.log(cryptoCntrlUrl);
        addUsersInputToStorage();
        $.ajax({
            url: cryptoCntrlUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //Run a for loop 3 times
            for (var x = 0; x < 3; x++) {
                //gives coinName the value of the name of the coin from the response
                var coinName = response[0].coins[0].name;
                //News Header
                newsTitle = response[x].title;
                storyUrl = response[x].url;
                console.log(coinName);
                //Run the addNewsSection function 
                addNewsSection(storyUrl, newsTitle);
                //empty the input box
                $("#userInput").val("");

            }
        }, function (error) {
            //hides any toast thats already on the page
            $(".toast").hide();
            //Dynamically create a bootstrap toast element
            var errorDisplay = $("<div>");
            var errorDisplayExit = $("<button>");
            errorDisplayExit.attr({
                "class": "ml-2 mb-1 close",
                "data-dismiss": "toast",

            });
            errorDisplayExit.text("x");
            errorDisplayExit.css({
                "padding-left": "220px"

            });
            errorDisplay.attr("class", "toast");
            errorDisplay.attr("role", "alert");
            errorDisplay.attr("data-autohide", "false");
            errorDisplay.css({
                "color": "red"
            });
            var toast = $("<div>");
            toast.text("iCrypto Alert");
            toast.append(errorDisplayExit);
            toast.attr("class", "toast-header");
            var toastBody = $("<div>");
            toastBody.attr("class", "toast-body");
            errorDisplay.append(toast);
            errorDisplay.append(toastBody);
            var errorStatus = error.status;
            toastBody.text("Coin not found in database. Be sure spelling is correct.");
            $("#errorBox").append(errorDisplay);
            $(".toast").toast("show");
            // alert(errorStatus)

        });
    }


    function addNewsSection(url, title) {
        var news = $("<tr />");
        var newsLink = $("<a />");
        newsLink.attr("target", "blank");
        newsLink.attr("href", url);
        news.attr("class", "list-group-item bg-dark");
        newsLink.html(title);
        news.append(newsLink[0]);
        console.log(newsLink[0]);
        $("#newsBox").prepend(news[0]);
        // debugger;
    }
    function addUsersCointoArray() {
        usersCoinsArray.push(usersInput);
    }
    //Local Storage 
    function addUsersInputToStorage(){
    // Save data to the current local store
    localStorage.setItem("usersCoin", usersCoinsArray);
    }
























    

// ***              Marlon code here            ***
// CryptoGeckoAPI Call

// Global variables:

var coinName;
var currentPrice;
var highPrice;
var lowPrice;
var marketCap;




var coinGeckoApiKey = "";


// function usersPricing () {




// Appends Price Data to table
function addPriceData() {
    usersInput = $("#userInput").val().toLowerCase();
    var coinGeckoUrl = "https://api.coingecko.com/api/v3/coins/"+usersInput;
    // var newRow =$("<tr>").append(
    //     $("<td>").text("Coin Name"),
    //     $("<td>").text("Market Cap"),
    //     $("<td>").text("Coin Price"),
    //     $("<td>").text("24-hr High"),
    //     $("<td>").text("24-hr Low")

    $.ajax({
        url: coinGeckoUrl,
        method: "GET",
    
    }).then(function (response) {
    
    console.log(response)
    
    coinName = response.name;
    console.log(coinName);
    
    currentPrice = response.market_data.current_price.usd;
    console.log("Current Price: -- $" +currentPrice);
    
    highPrice = response.market_data.high_24h.usd;
    console.log("High Price: -- $" +highPrice);
    
    lowPrice = response.market_data.low_24h.usd;
    console.log("Low Price: -- $"+lowPrice)
    
    marketCap = response.market_data.market_cap.usd;
    console.log("Market Cap: -- $"+marketCap.toLocaleString('en') );
    
    // addPriceData();
            
    
    
    

    var newRow = $(("<tr class = 'tableRow'><td>" + coinName + "</td><td>"+ marketCap.toLocaleString('en') + "</td><td>" + currentPrice + "</td><td>" + highPrice + "</td><td>" + lowPrice  + "</td></tr>"));



    // var prices = $("<tr>")    
    
    // prices.attr("class","list-group-item bg-dark")
    // prices.text(currentPrice)
    // var head = $("<thead>")
    // $("#cryptoBox").prepend(head)
    // head.append(prices)
    // var th = $("<th>")
    // th.attr("scope", "col")
    // th.text("Current Price")

    $("#cryptoBox").append(newRow);
    addUsersCointoArray();

});

}


});












































