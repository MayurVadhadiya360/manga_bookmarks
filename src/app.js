const express = require("express");
const hbs = require("hbs");
const app = express();
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";
const url = "your mongo atlas link";

const routes = require("./routes/main");

app.use('/static', express.static('public'));
app.use("",routes);

// template engine
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");

// db connection
// MongoClient.connect(url, async (err, db)=>{
//     if(err) throw err;
//     console.log("db connected");
//     let dbo = db.db("myapp");
//     // let temp = await dbo.collection("genre").find();
//     // console.log(temp[0]);

// });
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/myapp", async ()=>{
//     console.log("db connected");
//     console.log(g);
//     // genre.insertMany({
//     //     title: "Action",
//     //     css_class: "btn-outline-primary"
//     // });
// });



app.listen(process.env.PORT || 5556, ()=>{
    console.log("Server Started");
});


