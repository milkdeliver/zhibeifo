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
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/#login');
};

//Register the authentication middleware
router.use('/posts', isAuthenticated);

router.route('/posts')
	
	//create a new post
	.post(function(req, res){

		//TODO create a new post in the database
		res.send({message:"TODO create a new post in the database"});
	})

	.get(function(req, res){

		//TODO get all the posts in the database
		res.send({message:"TODO get all the posts in the database"});
	})

//api for a specfic post
router.route('/posts/:id')
	
	//create
	.put(function(req,res){
		return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
	})

	.get(function(req,res){
		return res.send({message:'TODO get an existing post by using param ' + req.param.id});
	})

	.delete(function(req,res){
		return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
	});
// module.exports = function(router){
    router.route('/users')
    .get(function (req, res) {
        User.find({}, function(err, data){
            res.json(data);
        });
    })
    .post(function (req, res) {
        var user = new User();
        user.nickname = req.body.nickname;
        user.password = req.body.password;
        user.email = req.body.email;
        
        user.save(function(err, data){
            res.json(data);
        })
    })
    // 
    router.post('/customers', function(req, res){
        console.log(req.body);
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        customer.classname = req.body.classname;
        customer.address.street = req.body.address.street;
        customer.address.city = req.body.address.city;
        customer.address.state = req.body.address.state;
        customer.address.zip = req.body.address.zip;
        // customer.firstname = "test";
        
        customer.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/customers', function(req, res) {
        Customer.find({}, function(err, data){
            res.json(data);
        });
    });
    
    router.get('/customers/:id', function(req, res) {
        Customer.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/customers', function(req, res){
        Customer.remove({}, function(err) {
            res.json({result: err? "error" : "ok"});
        })
    })
    
    router.delete('/customers/:id', function(req, res){
        Customer.remove({_id: req.params.id}, function(err){
            res.json({result: err? 'error' : 'ok'});
        })
    })
    
    router.post('/customers/:id', function(req, res) {
        Customer.findOne({_id: req.params.id}, function(err, data){
            var customer = data;
            customer.firstname = req.body.firstname;
            customer.lastname = req.body.lastname;
            customer.phone = req.body.phone;
            customer.classname = req.body.classname;
            if( req.body.address) {
                customer.address.street = req.body.address.street;
                customer.address.city = req.body.address.city;
                customer.address.state = req.body.address.state;
                customer.address.zip = req.body.address.zip;
            }
            
            customer.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
            
        })
    })
// }

module.exports = router;