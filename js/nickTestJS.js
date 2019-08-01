"use strict";
let gameGuid;
const searchFunc = $('#searchGames').click(function () {
    let search = $('#gameSearch').val();
    console.log(search);
    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key='+giantBombKey+'&query='+search+'&resources=game'
    }).done(function(data) {
        console.log(data);
        $('#displayGames').html("");
        let imageURL;
        let html = "";
        html += " ";
        for (let i = 0; i <= data.results.length-1; i++) {
            imageURL = data.results[i].image.original_url;
            // $('#displayGames').append(`<div class="col-3"><img src="${imageURL}" alt="gameImage"><h4>${data.results[i].name}</h4></div>`);
            html += `<div class="col-4"><img class="gameImg" src="${imageURL}" alt="gameImage"><h5>${data.results[i].name}</h5></div>`;
            // html += `<img src="${imageURL}" alt="gameImage">`;
            // console.log(data.results[i].image.medium_url);
        }
        $(html).appendTo('#displayGames');
        gameGuid = data.results[0].guid;
        console.log(gameGuid);
    }).then(gameInfo);
});

const gameInfo = () => $.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/game/'+gameGuid+'/?api_key='+giantBombKey+'&format=jsonp'
}).done(function(data) {
    console.log(data)
});

// $.ajax ({
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain: true,
//     jsonp: 'json_callback',
//     url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key='+giantBombKey+'&query=batman'
// }).done(function(data) {
//     console.log(data);
// }).fail(function() {
//     // alert("error");
// }).always(function() {
//     // alert("complete");
// });