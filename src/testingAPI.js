//Wiki API

const searchItemFirstWord= "Bill";
const searchItemSecondWord = "Nye";
const wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchItemFirstWord}%20${searchItemSecondWord}&utf8=&format=json`;

fetch(wikiURL).then(response => response.json()).then(data => console.log(data));

console.log("it works.");
