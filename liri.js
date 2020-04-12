require("dotenv").config();

var keys = require("./key.js");

//grab the axios package
var axios = require("axios");

//grab and read the random.txt file
var fs = require("fs");

var moment = require("moment");


//grab the spotify package and initialize
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
//slice and rejoin in case artist or band has space in the name
var input = process.argv.slice(3).join(" ");
console.log(command, input);

switch (command) {
  case "concert-this":
    concert();
    log();
    break;
  case "spotify-this-song":
    music();
    log();
    break;
  case "movie-this":
    movie();
    log();
    break;
  case "do-what-it-says":
    random();
    log();
    break;
  default:
    console.log("Please submit a valid request");
}

function concert() {
  var concertURL = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;
  axios.get(concertURL).then(function (response) {
    // Name of the venue, venue location, date and time
    for (var i = 0; i < response.data.length; i++) {
      console.log(`Name of the venue: ${response.data[i].venue.name}
            \nVenue location: ${response.data[i].venue.city}, ${
        response.data[i].venue.country
      } 
            \nEvent date and time: ${moment(response.data[i].datetime).format(
              "MM-DD-YYYY LT"
            )}\n\n######################################\n`);
    }
  });
}

function music() {
  //   * If no song is provided then your program will default to "The Sign" by Ace of Base.
  if (command === "spotify-this-song" && process.argv[3] === undefined) {
    input = "The Sign";
  }

  spotify.search({ type: "track", query: input, limit: 1 }, function (
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    } else {
      console.log(`\nArtist: ${data.tracks.items[0].artists[0].name} 
            \nSong Name: ${data.tracks.items[0].name}
            \nPreview: ${data.tracks.items[0].preview_url}
            \nAlbum Name: ${data.tracks.items[0].album.name} 
            \n\n######################################\n`);
    }
  });
}

function movie() {
  if (command === "movie-this" && process.argv[3] === undefined) {
    input = "Sleepless in Seattle";
  }

  var OMDBUrl = `http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`;

  axios.get(OMDBUrl).then(function (response) {
    console.log(`\nMovie Title: ${response.data.Title}\nRelease Year: ${response.data.Released}\n
    \nIMDB Rating: ${response.data.Rated}\nRotten Tomatoes Rating: ${response.data.Ratings[1].Value}
    \nProduced In: ${response.data.Country}\nLanguage: ${response.data.Language}
    \nPlot: ${response.data.Plot}\nActors: ${response.data.Actors}`);
  });
}

function random() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    if (dataArr[0] === "concert-this") {
      input = dataArr[1];
      concert();
    }
    else if (dataArr[0] === "spotify-this-song"){
      input = dataArr[1];
      music();
    }
    else if (dataArr[0] === "movie-this"){
      input = dataArr[1];
      movie();
    }
    console.log("You need to put in a valid command")
  });
  
}


function log() {
  // This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.appendFile("log.txt",`(${command}, ${input}), `, function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("log.txt was updated!");

});

}

