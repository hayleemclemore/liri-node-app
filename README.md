# liri-node-app

This is a repository for the LIRI app, a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and returns data.

## Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
The intention of this app was to utilize 
The purpose was to use "backend" technologies only. Node.js was used along with NPM (Node Package Manager) libraries in order to accomplish the tasks. There is no front end to this application, therefore this is no html page to publish.

## Give a high-level overview of how the app is organized

## Instructions:
    LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
    It can take in any of the following commands:

   * **`concert-this`**

   * **`spotify-this-song`**

   * **`movie-this`**

   * **`do-what-it-says`**


   Running each of these commands in your terminal/bash window will do the following:

   * node liri.js concert-this 'concert or band name'
        1. Name of the Venue
        2. Location of the Venue
        3. Date of the Event
        ![results](./assets/images/concert-this.png)

   * node liri.js spotify-this-song 'song name'
        1. Artist(s)
        2. Song Name
        3. Album
        4. Song Preview Link
        ![results](./assets/images/spotify-this-song.png)

        If a song name isn't given, the liri bot will default to searching for 'The Sign.'  
    

   * node liri.js movie-this 'movie name'
        1. Movie Title
        2. Release Year
        3. IMDB Rating
        4. Country Produced in
        5. Language of the film
        6. Plot
        7. Actors in Movie
        8. Rotten Tomatoes Rating
        ![results](./assets/images/movie-this.png)

        If a movie name isn't given, the liri bot will default to searching for 'Jaws'  

   * node liri.js do-what-it-says

   LIRI will use the text inside of random.txt and use it to call the first command as the command, and the second command as the input.

   The random.txt file includes: concert-this,tame impala
    ![results](./assets/images/do-what-it-says.png)


## Screenshots: 
![concert-this](./assets/images/concert-this.png)
Format: ![Alt Text](url)

## Links
    Repository:[Here](http://github.com)

## Technologies used in the app:
    * Javascript
    * Node.js
    * Bandsintown API
    * Spotify API
    * OMDB API

## My role:
