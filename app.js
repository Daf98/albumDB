//require mongoose
const mongoose = require('mongoose');
//connect to mongoDB database
mongoose.connect('mongodb://localhost:27017/albumDB', {useNewUrlParser: true, useUnifiedTopology: true});

//CREATE

//create schema (blueprint/structure)
//of data that we save to the database
const albumSchema = new mongoose.Schema ({
  name: String, //the DB has a variable called name with a value of String
  author: String,
  year: Number,
  genre: String,
  listened: Boolean,
  liked: Boolean
});


//creating the model. parameters: object of collection, schema
const Album = mongoose.model('Album', albumSchema);
//creating the album document
const album = new Album({
  name: 'Insurgentes',
  author: 'Steven Wilson',
  year: 2008,
  genre: 'Prog rock',
  listened: 1,
  liked: 1
});
//save album inside Album inside albumDB
//album.save().then(() => console.log('meow'));


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "John",
  age: 37
});

//person.save();

const SiameseDream = new Album({
  name: 'Siamese Dream',
  author: 'The Smashing Pumpkins',
  year: 1993,
  genre: 'Alt rock, Grunge',
  listened: 1,
  liked: 1
});

const MellonCollie = new Album({
  name: 'Mellon Collie and the Infinite Sadness',
  author: 'The Smashing Pumpkins',
  year: 1995,
  genre: 'Alt rock, Dream pop',
  listened: 1,
  liked: 1
});

const Adore = new Album({
  name: 'Adore',
  author: 'The Smashing Pumpkins',
  year: 1998,
  genre: 'Alt rock, Art rock',
  listened: 1,
  liked: 1
});

//1st parameter: objects that match the album schema
//2nd parameter: callback function in case of error
// Album.insertMany([SiameseDream, MellonCollie, Adore], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("I love Billy Corgan (:");
//   }
// });


//READ

Album.find(function (err, albums){ //1. error 2.what it finds back
  if (err) {
    console.log(err);
  } else {
  console.log(albums);
  }
});
