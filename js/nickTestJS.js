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