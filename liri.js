require("dotenv").config();

var keys = require("./key.js");

//grab the axious package
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
    break;
  case "spotify-this-song":
    music();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    random();
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
    if (command === "spotify-this-song" && process.argv[3] === undefined){
        input = "The Sign";
    }

    spotify.search({ type: 'track', query:input, limit:1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        else {
            console.log(`\nArtist: ${data.tracks.items[0].artists[0].name} 
            \nSong Name: ${data.tracks.items[0].name}
            \nPreview: ${data.tracks.items[0].preview_url}
            \nAlbum Name: ${data.tracks.items[0].album.name} 
            \n\n######################################\n`); 
        }
         
      });
  }


  function movie() {

//     * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.
//   ```

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

//   * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

//   * It's on Netflix!

  }