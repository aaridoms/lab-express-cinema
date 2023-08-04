const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    const selectAllMovies =  async (movie) => {
      try {
        const allMovies = await movie.find()
        console.log(allMovies)
        res.render("movies", {
            allMovies: allMovies
        })
      } catch (error) {
        next(error)
      }
    }

    selectAllMovies(Movie)
});

router.get('/movies/:movieId', (req, res, next) => {
  
    const selectMovieById = async (movie, id) => {
      try {
        const movieDetails = await movie.findById(id)
        // console.log(movieDetails)
        res.render("movie-details", {
            movieDetails: movieDetails
        })
      } catch (error) {
        next(error)
      }
    }

    selectMovieById(Movie, req.params.movieId)
})

module.exports = router;
