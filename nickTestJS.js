let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.giantbomb.com/api/games/?api_key=2a50e1f3005ecbe524e6ca51bd6306d5e3f9903f",
    "method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": "http://localhost:63342"
        // "User-Agent": "PostmanRuntime/7.15.2",
        // "Accept": "*/*",
        // "Cache-Control": "no-cache",
        // "Postman-Token": "d4d958c6-9bdf-46ed-86f9-a0526413074f,f28abb2a-a4d5-4dd2-88b7-17be3bccd8e9",
        // "Host": "www.giantbomb.com",
        // "Cookie": "sat=dec87d61006809ef30bfb594391d738f; sptg=%5B%5D; device_view=full; AD_SESSION=k",
        // "Accept-Encoding": "gzip, deflate",
        // "Connection": "keep-alive",
        // "cache-control": "no-cache"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

// $.ajax({
//     url: "https://api-v3.igdb.com/games/?search=zelda&fields=id,name,summary",
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'user-key': 'a401940e32f4d4299e0b14f41fe77ec4',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })
//     .then(response => console.log(response.data))
//     .catch(err => console.error(err));


// axios({
//     url: "https://api-v3.igdb.com/games",
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'user-key': API_KEY
//     },
//     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
// })
//     .then(response => {
//     console.log(response.data);
// })
// .catch(err => {
//     console.error(err);
// });