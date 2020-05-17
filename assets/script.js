// Giftastic for emotes


// The required topics array
var topics = [
    "surprised",
    "upset",
    "agree",
    "satisfied",
    "disagree",

]

// Renders buttons in array
function renderButtons() {

    // Empty buttons list
    $("#buttons-view").empty();

    // For Loop: through each topic emotes
    for (var i = 0; i < topics.length; i++) {
        
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var emoteButton = $("<button>");
        // Adding a class of movie to our button
        emoteButton.addClass("btn btn-warning emote-button");
        // Adding a data-attribute
        emoteButton.attr("data-emote", topics[i]); //( { title:"Test", alt:"Test2" } );
        // Adding id emote-button
        // btn.attr("id", "emote-button");
        // Providing the initial button text
        emoteButton.text(topics[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(emoteButton);
    }
};


// On click functions for the .emote-button class
function gifManifest () {
    // On click functions for the .emote-button class 
    $(".emote-button").click(function(){

        $("#gifs-view").empty();
        console.log("clicked button");
        // Grabbing and storing the data-animal property value from the button
        var emote = $(this).attr("data-emote");

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LNB5YcmfMFEH6uZ7xjFDxJALUmczzoOV&q=" +
            emote + "&limit=15&offset=0&rating=PG&lang=en";

        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        // emote + "&api_key=LNB5YcmfMFEH6uZ7xjFDxJALUmczzoOV&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function(response) {
            // console.log(queryURL);
            // console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating a div to store the rating and image
                var emoteDiv = $("<div>");
                // Creating the rating text
                var p = $("<p>").text("Rated: " + results[i].rating);
                // Creating and storing an image tag
                var emoteImage = $("<img>");
                // Adding class for click interaction
                emoteImage.addClass("gif-image");
                // Adding src to default to still
                emoteImage.attr("src", results[i].images.fixed_height_still.url);
                // Adding and storing url for still image
                emoteImage.attr("data-still", results[i].images.fixed_height_still.url);
                // Adding and storing url for animate image
                emoteImage.attr("data-animate", results[i].images.fixed_height.url);
                // Setting attribute to still upon loading
                emoteImage.attr("data-state", "still");
                // emoteImage.attr("float", "left");
                // Appending the paragraph and image tag to the animalDiv
                emoteDiv.append(p);
                emoteDiv.append(emoteImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-view").append(emoteDiv);

                
            }
        });
    });
};

renderButtons();
gifManifest();


// function gifStates () {
    // $("img").on("click", function() {
    //     console.log("clicked on gif");
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //     }
    // });
// };




// renderButtons();
// gifManifest();
// gifStates ();
$("img").click(function() {
    console.log("clicked on image");
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

// function addNewButton() {
$("#add-new-button").on("click",function() {
    var userInput = $("#user-input");
    console.log("addnewbutton");
    console.log(userInput);
    topics.push(userInput.val().trim());
    userInput.val("");
    renderButtons();
    gifManifest();
    // gifStates();
})

// };

