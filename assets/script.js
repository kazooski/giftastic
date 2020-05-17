// Giftastic for emotes

var topics = [
    "surprised",
    "upset",
    "agree",
    "satisfied",
    "disagree",

]

function renderButtons() {

    // Empty buttons list
    $("#buttons-view").empty();

    // For Loop: through each topic emotes
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var btn = $("<button>");
      // Adding a class of movie to our button
      btn.addClass("btn btn-warning");
      // Adding a data-attribute
      btn.attr("data-emote", topics[i]); //( { title:"Test", alt:"Test2" } );
      // Providing the initial button text
      btn.text(topics[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(btn);
    }
  };

 renderButtons();


// $("#emote-button").on("click", function() {
//     // Grabbing and storing the data-animal property value from the button
//     var animal = $(this).attr("data-animal");

//     // Constructing a queryURL using the animal name
//     // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     //     animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LNB5YcmfMFEH6uZ7xjFDxJALUmczzoOV&q=" +
//         stringTopics + "limit=25&offset=0&rating=PG&lang=en";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         // After data comes back from the request
//         .then(function(response) {
//         console.log(queryURL);

//         console.log(response);
//         // storing the data from the AJAX request in the results variable
//         var results = response.data;

//         // Looping through each result item
//         for (var i = 0; i < results.length; i++) {

//             // Creating and storing a div tag
//             var animalDiv = $("<div>");

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + results[i].rating);

//             // Creating and storing an image tag
//             var animalImage = $("<img>");
//             // Setting the src attribute of the image to a property pulled off the result item
//             animalImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and image tag to the animalDiv
//             animalDiv.append(p);
//             animalDiv.append(animalImage);

//             // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//             $("#gifs-appear-here").prepend(animalDiv);
//         }
//         });
//     });      