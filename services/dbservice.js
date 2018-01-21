var MongoClient=require("mongodb").MongoClient;

exports.createConnection=function(){
MongoClient.connect("mongodb://SURYA_GSP:openup@ds161022.mlab.com:61022/projector25").then(function(client){
  console.log("working");
  exports.database=client.db("projector25");
});
}
