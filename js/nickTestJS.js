$.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: `http://www.giantbomb.com/api/search/?format=jsonp&api_key=${giantBombKey}&query=batman`
}).done(function(data) {
    console.log(data);
}).fail(function() {
    alert("error");
}).always(function() {
    // alert("complete");
});