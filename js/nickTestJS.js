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
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key='+giantBombKey+'&query='+search
    }).then(function(data) {
        console.log(data.results[0].guid);
        gameGuid = data.results[0].guid;
    }).then($.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/game/'+gameGuid+'/?format=jsonp&api_key='+giantBombKey
    }).done(function(data) {
        console.log(data);
    }).fail(function() {
        // alert("error");
    }).always(function() {
        // alert("complete");
    }));
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