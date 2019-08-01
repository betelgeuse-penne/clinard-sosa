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
            html += `<div class="col-4 gameData center-block align-self-center"><a href="#" id="game-${[i]}" data-toggle="modal" data-target="#gameModal"><img class="gameImg" src="${imageURL}" alt="gameImage"></a><h5>${data.results[i].name}</h5></div>`
        }

        $(html).appendTo('#displayGames');
        gameGuid = data.results[0].guid;

        // Adds Modal Functionality to the images //
        $('#game-0').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[0].deck}`);
            $('#gameModalTitle').html(`${data.results[0].name}`)
        });

        $('#game-1').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[1].deck}`);
            $('#gameModalTitle').html(`${data.results[1].name}`)
        });

        $('#game-2').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[2].deck}`);
            $('#gameModalTitle').html(`${data.results[2].name}`)
        });

        $('#game-3').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[3].deck}`);
            $('#gameModalTitle').html(`${data.results[3].name}`)
        });

        $('#game-4').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[4].deck}`);
            $('#gameModalTitle').html(`${data.results[4].name}`)
        });

        $('#game-5').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[5].deck}`);
            $('#gameModalTitle').html(`${data.results[5].name}`)
        });

        $('#game-6').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[6].deck}`);
            $('#gameModalTitle').html(`${data.results[6].name}`)
        });

        $('#game-7').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[7].deck}`);
            $('#gameModalTitle').html(`${data.results[7].name}`)
        });

        $('#game-8').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[8].deck}`);
            $('#gameModalTitle').html(`${data.results[8].name}`)
        });

        $('#game-9').on("click", function () {
            $('#modal-body').empty();
            $('#gameModalTitle').empty();
            $('#modal-body').html(`${data.results[9].deck}`);
            $('#gameModalTitle').html(`${data.results[9].name}`)
        })

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