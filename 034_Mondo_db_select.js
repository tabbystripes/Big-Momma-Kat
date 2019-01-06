var selectDB = function(port, dbName) {
// if there is no port then it defaults to 27017
  if(!port){
    port = 27017;
  }
//default db is wardrobe
  if(!dbName){
    dbName = "wardrobe";
  }
//setting up the actual connection
  db = connect("localhost:" + port + "/" + dbName);
//running the actual connection
  return db;
}
