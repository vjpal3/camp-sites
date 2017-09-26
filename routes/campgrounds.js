var express = require("express");
var router = express.Router(); //A new instance of express router
var Campground = require("../models/campground");
var middleware = require("../middleware"); //for index.js file, but not explicitly mentioned

//Index - Show all Campgrounds
//router.get("/campgrounds", function(req, res) {
router.get("/", function(req, res) {
    
    Campground.find({}, function(err, campgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:campgrounds});
        }
    });
}); 

//Create route
//router.post("/campgrounds", function(req, res) {
router.post("/", middleware.isLoggedIn, function(req, res) {  
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
      id: req.user._id,
      username: req.user.username
    };
    var newCampground = {name: name, price: price, image: image, description: desc, author: author};
    
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        }else {
           res.redirect("/campgrounds");
        }
    });
});

//New - show form to create new campground
//router.get("/campgrounds/new", function(req, res) {
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("./campgrounds/new");
    
});

//Show - shows more info about one campground
//router.get("/campgrounds/:id", function(req, res) {
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //console.log(foundCampground);
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
    
   // 
});

//Edit campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
        req.flash("error", "Campground not found!!");
      }
     res.render("campgrounds/edit", {campground: foundCampground });
  }); //findById
});

//update campground
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  //find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + updatedCampground._id);
    }
  }); //findAndUpdate
});

//Delete Campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;