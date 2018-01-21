var moviesl=require('./movieData');
var db=require("../services/dbservice");
exports.getAllMovies = function(req,res){
  var db1=db.database;
  var movieCollection=db1.collection("movies");
  movieCollection.find().toArray().then(function(result){
    var outputResult={
      "isSuccess":true,
      "data":result
    };
    console.log(outputResult);
      return res.json(outputResult.data);
  });
};
exports.addnewmovies=function(req,res,next){
  var db1=db.database
  movie=req.body,
  movieCollection=db1.collection("movies");
  movieCollection.insert(movie).then(function(save_data){
      return res.json({
        "isSuccess":true
      });
  });
}
