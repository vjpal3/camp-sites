var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  { 
    name: "Power of Mantra", 
    image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
    description: "Repeat it whenever you get time....You'll be surprised!!!.....Quisque eget diam tellus. Vestibulum ex turpis, consectetur id magna at, ullamcorper fermentum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent turpis enim, laoreet ut mauris luctus, feugiat sagittis sapien. Donec volutpat nisl eu nisi ultricies, gravida luctus odio tristique. Curabitur maximus, leo in fringilla sagittis, lorem magna elementum risus, in posuere dui felis nec arcu. Integer maximus purus mauris, consequat dignissim ipsum elementum ac. Proin urna dolor, ultricies sit amet arcu luctus, vestibulum posuere velit. Morbi at nulla lorem. Aliquam leo augue, pellentesque quis ipsum eget, vestibulum egestas risus. Nullam vitae feugiat velit, a mollis turpis. Duis efficitur lorem metus, sit amet convallis lacus ornare eu. Sed lacus est, luctus sed erat et, eleifend placerat eros. Nulla in consequat ante, bibendum aliquet lectus."
  },
  { 
    name: "Power of Ishta", 
    image: "https://farm9.staticflickr.com/8525/8546357078_fc1929a4d6.jpg",
    description: "See him always whenever you get time....You'll be surprised!!! ...Quisque eget diam tellus. Vestibulum ex turpis, consectetur id magna at, ullamcorper fermentum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent turpis enim, laoreet ut mauris luctus, feugiat sagittis sapien. Donec volutpat nisl eu nisi ultricies, gravida luctus odio tristique. Curabitur maximus, leo in fringilla sagittis, lorem magna elementum risus, in posuere dui felis nec arcu. Integer maximus purus mauris, consequat dignissim ipsum elementum ac. Proin urna dolor, ultricies sit amet arcu luctus, vestibulum posuere velit. Morbi at nulla lorem. Aliquam leo augue, pellentesque quis ipsum eget, vestibulum egestas risus. Nullam vitae feugiat velit, a mollis turpis. Duis efficitur lorem metus, sit amet convallis lacus ornare eu. Sed lacus est, luctus sed erat et, eleifend placerat eros. Nulla in consequat ante, bibendum aliquet lectus."
  },
  { 
    name: "Power of Guru", 
    image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg",
    description: "Pray him always whenever you get time....You'll be surprised!!!.. ...Quisque eget diam tellus. Vestibulum ex turpis, consectetur id magna at, ullamcorper fermentum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent turpis enim, laoreet ut mauris luctus, feugiat sagittis sapien. Donec volutpat nisl eu nisi ultricies, gravida luctus odio tristique. Curabitur maximus, leo in fringilla sagittis, lorem magna elementum risus, in posuere dui felis nec arcu. Integer maximus purus mauris, consequat dignissim ipsum elementum ac. Proin urna dolor, ultricies sit amet arcu luctus, vestibulum posuere velit. Morbi at nulla lorem. Aliquam leo augue, pellentesque quis ipsum eget, vestibulum egestas risus. Nullam vitae feugiat velit, a mollis turpis. Duis efficitur lorem metus, sit amet convallis lacus ornare eu. Sed lacus est, luctus sed erat et, eleifend placerat eros. Nulla in consequat ante, bibendum aliquet lectus."
  },
  { 
    name: "Power of Mind", 
    image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg",
    description: "Tame it always whenever you get time....You'll be surprised!!! ...Quisque eget diam tellus. Vestibulum ex turpis, consectetur id magna at, ullamcorper fermentum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent turpis enim, laoreet ut mauris luctus, feugiat sagittis sapien. Donec volutpat nisl eu nisi ultricies, gravida luctus odio tristique. Curabitur maximus, leo in fringilla sagittis, lorem magna elementum risus, in posuere dui felis nec arcu. Integer maximus purus mauris, consequat dignissim ipsum elementum ac. Proin urna dolor, ultricies sit amet arcu luctus, vestibulum posuere velit. Morbi at nulla lorem. Aliquam leo augue, pellentesque quis ipsum eget, vestibulum egestas risus. Nullam vitae feugiat velit, a mollis turpis. Duis efficitur lorem metus, sit amet convallis lacus ornare eu. Sed lacus est, luctus sed erat et, eleifend placerat eros. Nulla in consequat ante, bibendum aliquet lectus."
  }
];

function seedDB() {
  //remove all campgrounds
  Campground.remove({}, function(err) {
    // if(err) {
    //   console.log(err);
    // } else {
    
    //   console.log("Campgrounds removed");
    //   //add a few campgrounds
    //   data.forEach(function(seed) {
    //     Campground.create(seed, function(err, campground) {
    //       if(err){
    //         console.log(err);
    //       } else {
    //         console.log("campground Added");
    //         //create comment
    //         Comment.create({
    //           text: "This is great piece of advice.. will try to remember!!!",
    //           author: "A spiritual aspirant"
    //         }, function(err, comment){
    //             if(err) {
    //               console.log(err);
    //             } else {
    //               campground.comments.push(comment);
    //               campground.save();
    //               console.log("Created new comment!!")
    //             }
    //         });
    //       }
    //     });
    //   });
    // }
  });
  
  //add comments
}

module.exports = seedDB;
