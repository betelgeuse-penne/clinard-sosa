"use strict";

//GiantBomb id values for future use
//  Platforms:
//  PC: 94
//  Switch: 157
//  XBONE: 145
//  PS4: 146

Date.prototype.today = function () {
    return this.getFullYear() + "-" +(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ ((this.getDate() < 10)?"0":"") + this.getDate();
};

let newDate = new Date();
let date = newDate.today();

$('.tab').click(function (e) {
    let tabName = (e.currentTarget.attributes[1].nodeValue);
    removeActive();
    hideAll();
    $('#'+tabName).addClass('is-active');
    $('#' + tabName + '-content').removeClass('hidden');
});

const removeActive = () => {
    $('li').each(function() {
        $(this).removeClass('is-active');
    });
};

const hideAll = () => {
    $('#pc-tab-content').addClass('hidden');
    $('#switch-tab-content').addClass('hidden');
    $('#ps-tab-content').addClass('hidden');
    $('#xbone-tab-content').addClass('hidden');
};

const changeReleases = $('.tab').click(function () {
    let platformID = $(this).attr("value");
    console.log(platformID);
    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'https://www.giantbomb.com/api/releases/?api_key='+giantBombKey+'&format=jsonp&sort=release_date:desc&filter=region:1,platform:'+platformID+',release_date:1950-01-01|'+date+'&limit=10'
    }).done(function(data) {
        console.log(data);

        $('#displayReleases').html('');
        let html = '';
        for (let i = 0; i <= data.results.length-1; i++) {
            html += `<p>${i+1} ${data.results[i].name} (${data.results[i].platform.name}) \n</p>`
        }

        $(html).appendTo('#displayReleases');
    });
});

$.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'https://www.giantbomb.com/api/releases/?api_key='+giantBombKey+'&format=jsonp&sort=release_date:desc&filter=region:1,platform:94,release_date:1950-01-01|'+date+'&limit=10'
}).done(function(data) {
    console.log(data);

    $('#displayReleases').html('');
    let html = '';
    for (let i = 0; i <= data.results.length-1; i++) {
        html += `<p>${i+1} ${data.results[i].name} (${data.results[i].platform.name}) \n</p>`
    }

    $(html).appendTo('#displayReleases');
});