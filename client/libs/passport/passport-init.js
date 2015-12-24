var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
// var User = require("../models/user");g
var mongoose = require("mongoose");
var User = mongoose.model("User");
//temporary data store
var users = {};
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
   passport.serializeUser(function(user, done) {
		console.log('serializing user:', user.username);
		done(null, user._id);
	});

    //Desieralize user will call with the unique id provided by serializeuser
    passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
		    if(err)
		       return done(err, false);
		    
		    if(!user){
		       return done('user not found', false);
		    }
		    //we found the user object provide it back to passport
		     done(null, user);
		  //   done(err, user);
		});
	});


    passport.use('login', new LocalStrategy({
            passReqToCallback : true
    },
    function(req, username, password, done) { 
         User.findOne({'username' : username}, function(err, user){
            if(err)
                done(err);
            if(!user){
                console.log('User Not Found with username '+ username);
                return done(null, false);
            }
            // User exists but wrong password, log the error 
            if (!isValidPassword(user, password)){
                console.log('Invalid Password');
                return done('incorrect password', false); // redirect back to login page
            }
            
            // User and password both match, return user from done method
            // which will be treated like success
            return done(null, user);
        })
    }));
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
            // console.log(username);
         User.findOne({'username' : username}, function(err, user) {
            //  console.log(user);
            if(err){
                console.log("Error Signup")
                return done(err);
            }
            if(user){
                console.log("User has already exited");
                return done(null, false);
            } else{
                var newUser = new User();
                newUser.username = username;
                newUser.password = createHash(password);
                // newUser.email = email;
                newUser.save(function(err) {
                    if (err){
                        console.log('Error in Saving user: '+err);  
                        throw err;  
                    }
                    console.log(newUser.username + ' Registration succesful');    
                    return done(null, newUser);
                });
            }
        })
    }));

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};