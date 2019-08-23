"use strict";
let gameGuid;
const searchFunc = $('#searchGames').click(function () {
    let search = $('#gameSearch').val();
    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key='+giantBombKey+'&query='+search+'&resources=game'
    }).done(function(data) {

        $('#displayGames').html("");
        let imageURL;
        let html = "";
        html += " ";
        for (let i = 0; i <= data.results.length-1; i++) {
            imageURL = data.results[i].image.original_url;
            html += `<div class="col-4 gameData center-block align-self-center"><a href="#" id="game-${[i]}" data-toggle="modal" data-target="#gameModal"><img class="gameImg" src="${imageURL}" alt="gameImage"></a><h5>${data.results[i].name}</h5></div>`
        }

        $(html).appendTo('#displayGames');
        gameGuid = data.results[0].guid;

        // Adds Modal Functionality to the images
        for (let i = 0; i <= data.results.length-1; i++) {
            $(`#game-${[i]}`).on("click", function () {
                $('#modal-body').empty();
                $('#gameModalTitle').empty();
                $('#modal-body').html(`${data.results[i].deck}`);
                $('#gameModalTitle').html(`${data.results[i].name}`)
            });
        }

    }).then(gameInfo);
});

const gameInfo = () => $.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/game/'+gameGuid+'/?api_key='+giantBombKey+'&format=jsonp'
}).done(function(data) {
    // console.log(data)
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