var express = require('express');
var router = express.Router();
/* GET users listing. */
var movieController=require('../controllers/moviesController');
router.get('/all',movieController.getAllMovies).post('/add',movieController.addnewmovies);
module.exports = router;
