var Customer = require("../models/customer");
var User = require("../models/user");
var Record = require("../models/record");
var express = require("express");
var router = express.Router();

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods
// 	if(req.method === "GET"){
// 		return next();
// 	}
	
	//allow all get request methods included RESTful method
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/home');
};


//Register the authentication middleware
router.use('/records', isAuthenticated);
router.use('/users', isAuthenticated);

router.route('/records')
	//create a new post
	.post(function(req, res){
        var record = new Record();
        record.count = req.body.count;
        record.userId = req.body.userId;
        record.recorded = req.body.recorded;
        record.save(function(err, data){
            if(err) return res.send(500, err);
            return res.json(data);
        })
	})
	.get(function(req, res){
        Record.find(function(err, data){
            if(err) return res.send(500, err);
            
            return res.send(data);
        })
	})

    //api for a specfic post
router.route('/records/:id')
	
	//create
	.put(function(req,res){
	    Record.findById(req.params.id, function(err, record) {
	        if(err) return res.send(500, err);
	        record.count = req.body.count;
	        record.recorded = req.body.recorded;
	        record.save(function(err,data){
	            if(err) return res.send(err);
	            return res.json(data);
	        })
	       return res.json(record);
	    })
// 		return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
	})
	.get(function(req,res){
	    Record.findById(req.params.id, function(err, record){
	        if(err) return res.send(500, err);
	        res.json(record);
	    })
// 		return res.send({message:'TODO get an existing post by using param ' + req.param.id});
	})
	.delete(function(req,res){
	    Record.remove({_id: req.params.id}, function(err){
            res.json({result: err? 'error' : 'ok'});
        })
	   // Record.remove({_id: req.params.id}, function(err){
	   //     if(err) return res.send(500, err);
	   //     res.json("deleted :(");
	   // })
// 		return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
	});
	
// module.exports = function(router){
router.route('/users')
    .get(function (req, res) {
        User.find({}, function(err, data){
            if(err) return res.send(500, err);
            res.json(data);
        });
    })
    .post(function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        
        user.save(function(err, data){
            if(err) return res.send(500, err);
            res.json(data);
        })
    })

module.exports = router;