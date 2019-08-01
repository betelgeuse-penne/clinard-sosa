//Wiki API

// const searchItemFirstWord= "Bill";
// const searchItemSecondWord = "Nye";
// const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchItemFirstWord}%20${searchItemSecondWord}&utf8=&format=json`;

// fetch(wikiURL).then(response => response.json()).then(data => console.log(data));

// $.ajax ({
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain: true,
//     jsonp: 'json_callback',
//     url: wikiURL
// }).done(function(data) {
//     console.log(data);
// }).fail(function() {
//     alert("error");
// }).always(function() {
//     // alert("complete");
// });

// var apiEndpoint = "https://en.wikipedia.org/w/api.php";
// var params = "?action=query&format=json&list=search&srsearch=apple";
//
// fetch(apiEndpoint + params).then(response => response.json()).then(data => console.log(data));


// /**
//  * The function to wrap the result
//  */
// var callback = function (response) {
//     var pages = response.query.random; // Process the output to get the titles
//     Object.keys(pages).forEach(function(key) {
//         console.log(pages[key].title);
//     });
// };
//
// var scriptTag = document.createElement("script"); // Dynamically create a "script" tag
// scriptTag.src = apiEndpoint + "?" + params + "&callback=callback"; // Point to the query string
//
// document.body.appendChild(scriptTag); // Add the script tag to the document

/*THIS PROVIDES FIRST TEN TITLES AND SNIPPETS*/

$.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: {
        action: 'query',
        list: 'search',
        srsearch: 'Batman and robin',
        format: 'json',
        formatversion: 2
    },
    dataType: 'jsonp',
    success: function (x) {
        console.log( x.query.search);
    }
});

console.log("it works.");
