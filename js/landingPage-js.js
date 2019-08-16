"use strict";

Date.prototype.today = function () {
    return this.getFullYear() + "-" +(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ ((this.getDate() < 10)?"0":"") + this.getDate();
};

let newDate = new Date();
let date =newDate.today();

// console.log(date);

$.ajax ({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'https://www.giantbomb.com/api/releases/?api_key='+giantBombKey+'&format=jsonp&sort=release_date:desc&filter=region:1&filter=release_date:1950-01-01|'+date+''
}).done(function(data) {
    console.log(data);
});