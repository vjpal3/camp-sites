var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments - new
//router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
router.get("/new", middleware.isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
    }
    else {
      res.render("comments/new", {campground: campground});
    }
  });
});

//Comments -create
//router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
router.post("/", middleware.isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if(err) {
          req.flash("error", "Something went wrong!!");
          console.log(err);
        } else {
          //add username & id to comment 
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          //and save the comment to the DB
          comment.save();
          campground.comments.push(comment);
          campground.save();
          
         // console.log(comment);
          req.flash("success", "Successfully added comment!!");
          res.redirect("/campgrounds/" + campground._id); //show Page
        }
      }); //Comment.create
    }
  }); //findById
});

//Comments Edit
//  /campgrounds/:id/comments/:comment_id/edit ---> nested route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
  Comment.findById(req.params.comment_id, function(err, foundComment){
    if(err) {
      req.redirect("back");
    }
    else {
      res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
    }
  });
  
});

//Update comment Route
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
    if(err) {
      res.redirect("back");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

//Comment- Delete Route
// /campground/:id/comments/:comment_id
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if(err) {
      res.redirect("back");
    } else {
      req.flash("success", "Comment Deleted!!");
      res.redirect("/campgrounds/" + req.params.id);
    }
    
  });
});

module.exports = router;