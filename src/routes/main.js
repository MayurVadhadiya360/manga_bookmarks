const express = require("express");
const {MongoClient} = require('mongodb');
const url = "your mongo atlas link";
const bodyparser = require("body-parser");
var jsonparser = bodyparser.json();

const routes = express.Router();
// async function main(){
//     const client1 = new MongoClient(url);
//     await client1.connect();
//     item1 = await client1.db("myapp").collection("genre").find().toArray();
// }

routes.get("/", async (req,res)=>{
    // res.send("From routes");
    // item = [0,1,2,3,4];
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find().toArray();
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }

    res.render("index",{item:item, anime:animes});
});

routes.post('/', jsonparser, async (req, res)=>{
    const client = new MongoClient(url);
    console.log(req.body);
    try{
        await client.connect();
        if(req.body.name){
            await client.db("myapp").collection("records").insertOne(req.body);
            console.log(req.body.name);
        }
        if(req.body.title_){
            await client.db("myapp").collection("records").updateOne({name:req.body.title_}, {$set :{progress: req.body.progress_}});
        }
        item = await client.db("myapp").collection("genre").find().toArray();
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    

    res.render("index",{item:item});
});

routes.get("/Action", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"Action"}).toArray();
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "Action"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Romance", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"Romance"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "Romance"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Isekai", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"Isekai"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "Isekai"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/System", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"System"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "System"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/OP", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"OP"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "OP"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Comedy", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"Comedy"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "Comedy"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});
routes.get("/MartialArts", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"MartialArts"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "MartialArts"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/SliceOfLife", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"SliceOfLife"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "SliceOfLife"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Cultivation", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({genre:"Cultivation"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    item.forEach(element => {
        if(element['title'] == "Cultivation"){
            element['css_class'] = "btn-primary";
        }
    });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Anime", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({type:"Anime"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    // item.forEach(element => {
    //     if(element['title'] == "Anime"){
    //         element['css_class'] = "btn-primary";
    //     }
    // });
    res.render("index",{item:item, anime:animes});
});

routes.get("/Manga", async (req,res)=>{
    // res.send("From routes");
    const client = new MongoClient(url);
    try{
        await client.connect();
        item = await client.db("myapp").collection("genre").find().toArray();
        animes = await client.db("myapp").collection("records").find({type:"Manga"}).toArray();

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
    // item.forEach(element => {
    //     if(element['title'] == "Manga"){
    //         element['css_class'] = "btn-primary";
    //     }
    // });
    res.render("index",{item:item, anime:animes});
});

// main().item1.forEach(element =>{
//     routes.get("/"+element["title"], async (req,res)=>{
//         // res.send("From routes");
//         const client = new MongoClient(url);
//         try{
//             await client.connect();
//             item = await client.db("myapp").collection("genre").find().toArray();
//         }catch(e){
//             console.error(e);
//         }finally{
//             await client.close();
//         }
//         item.forEach(element => {
//             if(element['title'] == element["title"]){
//                 element['css_class'] = "btn-primary";
//             }
//         });
//         res.render("index",{item:item});
//     });
// });

module.exports=routes;

