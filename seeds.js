var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name:"Coorg Planter’s Camp",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdMGHUZ4nutmnRunBlo7d_PuzBFKWN3Ad1mL_QgIYzMI4uqHE",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                if(err){
                    console.log(err)
                }else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text:"This Place is Really Wonderful!",
                            author:"Abeeya"
                        },function(err,comment){
                            if(err){
                                console.log(err);

                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created New Comment");

                            }
                        });
                    }
                });
            });
        });
    }
module.exports = seedDB;

