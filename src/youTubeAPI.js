function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g, function (e,r){return t [n] [r]})}return res};
//
// let youtubeAPI = "AIzaSyCMtGWGAYIl-Qmt9OfdukSMnbnpT0HLT0U";
//
//  let youtubeURL= "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + youtubeAPI +
//     "&part=snippet,contentDetails,statistics,status";
//
//  fetch(youtubeURL).then(data => console.log(data));

/**
 * This function searches for videos that are associated with a particular Freebase
 * topic, logging their video IDs and titles to the Apps Script log. This example uses
 * the topic ID for Google Apps Script.
 *
 * Note that this sample limits the results to 25. To return more results, pass
 * additional parameters as documented here:
 *   https://developers.google.com/youtube/v3/docs/search/list
 */
// function searchByTopic() {
//     var mid = '/m/0gjf126';
//     var results = YouTube.Search.list('id,snippet', {topicId: mid, maxResults: 25});
//     for(var i in results.items) {
//         var item = results.items[i];
//         Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
// }

$(function(){
      $("form").on("submit", function(e){
            e.preventDefault();
            //start request
            let request = gapi.client.youtube.search.list({
                  part: "snippet",
                  type: "video",
                  q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
                  maxResults: 5,
                  order: "viewCount",
                  publishedAfter: "2017-01-01T00:00:00Z"

            });
            //execute request
            request.execute(function(response){
                  // console.log(response);
                  let results = response.result;
                  $.each(results.items, function(index, item){
                   // console.log(item);
                   // $("#results").append(item.id.videoId+" "+item.snippet.title+"</br>");
                        $.get("item.html", function(data){
                              $("#results").prepend(tplawesome(data, [{"title": item.snippet.title, "videoId" :item.id.videoId}]));
                        });
                  });
            });
      });
});


function init(){
      gapi.client.setApiKey("AIzaSyCMtGWGAYIl-Qmt9OfdukSMnbnpT0HLT0U");
      gapi.client.load("youtube", "v3", function(){
        // api is ready

 });
}