console.log("file loaded");
$.ajax({
  type:"GET",
  url:"http://localhost:3000/movies/all",
  dataType:"json",
  success:function(response){
      //console.log("Data from success",response);
      constructDOM(formObject(response));
  },
  error:function(err) {
    console.log("error in GET Method",err);
  }
});
function constructDOM(data)
{
  var catecontent=[];
  console.log("lenghtb fjv",data.length)
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
    var temp=[];
    console.log("constructDOM data",objectSchema);
    var categoryTitle=$('<h3 class="clearfix category categoryName">'+objectSchema.category+'</h3>');
    var length1=objectSchema.movies.length;
    catecontent.push(categoryTitle);
    for(var j=0;j<length1;j++)
    {
      var thu=$('<div class="movie fleft"><a href="#"> <div class="poster"><img src="'+objectSchema.movies[j].posterUrl+'" alt=""/></div></a><div class="details"><p class="yearOfRelease">'+objectSchema.movies[j].releaseYear+'</p><h4 class="name">'+objectSchema.movies[j].name+'</h4></div></div>');
      catecontent.push(thu);
    }
  }
  $('section.content').html(catecontent);
}
function formObject(response)
{
  var flags=[],cate=[];
  var length1=response.length;
  for(var i=0;i<length1;i++)
  {
    var movie=response[i];
  //  console.log("Movie",movie.name);
    //console.log("language",movie.language);
    var index=flags.indexOf(movie.language);
    if(index>=0)
    {
        cate[index].movies.push(movie);
        continue;
    }
    if(index==-1)
    {
      flags.push(movie.language);
    }
    var objectSchema={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    cate.push(objectSchema);
    console.log("objectSchema",objectSchema);
  }
console.log(flags);

console.log("formObject response",response);
return cate;
}
