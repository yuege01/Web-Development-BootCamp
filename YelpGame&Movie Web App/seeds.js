var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
        description: "blah blah blah"
        
    }
    ,
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description: "blah blah blah"
        
    }
    ,
    {
        name: "Canyon Floor", 
        image: "https://farm4.staticflickr.com/3062/2984119099_82336dfc3b.jpg",
        description: "blah blah blah"
        
    }
];
function seedDB() {
    Campground.remove({}, function(err){
        // if(err) {
        //     console.log(err);
        // }
        // else {
        //     console.log("removed campgrounds!");
        // }
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err) {
        //             console.log(err);
        //         }
        //         else {
        //             console.log("added campground");
        //         }
        //         Comment.create(
        //             {
        //                 text:"This place is great, but I wish there was Internet!",
        //                 author: "Homer"
        //             }, function(err, comment) {
        //                 if(err) {
        //                     console.log(err);
        //                 }
        //                 else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //             });
        //     });
        // });
    });
}
module.exports = seedDB;
