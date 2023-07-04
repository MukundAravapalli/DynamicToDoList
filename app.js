const express = require ("express");
const app = express();
const https = require ("https");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extende:true}));
app.use(express.static("public"));

var listItems = ["Wake Up", "Brush Teeth", "Work Out", "Shower"];
var workItems = ["Check mail"];

app.get("/", function(req, res){
    
    let day= date();
    
    res.render("list", {listTitle: day, newListItems: listItems});

}); // app.get

app.post("/", function(req, res){

    // console.log(req.body);
    let listItem = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(listItem);
        res.redirect("/work");
    }else{
        listItems.push(listItem);
        res.redirect("/");

    }

});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
    res.render("about");
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running");
});