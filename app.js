var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    flash       = require("connect-flash"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      =  require("./seeds"),
    User        = require("./models/user"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override");
    
mongoose.Promise = global.Promise; 

 //requiring routes   
var commentRoutes = require("./routes/comments"),    
    campgroundRoutes = require("./routes/campgrounds"), 
    indexRoutes = require("./routes/index");

var dburl = process.env.DATABASEURL || "mongodb://localhost/yelp_camp, {useMongoClient: true}";
mongoose.connect(dburl);   

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//Executes seedDB 
//seedDB();  //Seed the database

//passport configuration
app.use(require("express-session")({
  secret: "God is the most cutest thing in the world",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
//appends "/campgrounds" to all campgroundRoutes in campgrounds.js
app.use("/campgrounds", campgroundRoutes); 
app.use("/", indexRoutes); //Just to match above syntax

// Campground.create(
//     {   name: "Kamarpukur Pond", 
//         image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
//         description: "Sri Ramakrishna's birthplace is the holiest thing in this world!! I die for it."
//     }, 
//     function(err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created campground:");
//             console.log(campground);
//         }
// });



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server started!!");
});