Aim: Implement the database (MongoDB/MySQL) connection with Node.js

const mongoose require('mongoose');
// Mongo db url

const url- mongodb://localhost:27017/Vishwajit";

mongoose.connect(url)

.then(() => {

console.log("Connection has Successfully established with MongoDb...");
  
})

.catch((err) => {

console.log("Connection Error has occured : 🤦‍♂️, err); 
            
});
