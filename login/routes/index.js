var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var con = require('../conn/conn');


router.get('/', function(req, res, next) {
  if(req.session.flag == 1){
    req.session.destroy();
    res.render('index', { title: 'NewsFeed', message : 'Email Already Exists' , flag : 1});
  }
  else if(req.session.flag == 2){
    req.session.destroy();
    res.render('index', { title: 'NwsFeed', message : 'Registration Done.', flag : 0});
  }
  else if(req.session.flag == 3){
    req.session.destroy();
    res.render('index', { title: 'NewsFeed', message : 'Confirm Password Does Not Match.', flag : 1});
  }
  else if(req.session.flag == 4){
    req.session.destroy();
    res.render('index', { title: 'NewsFeed', message : 'Incorrect Email or Password.', flag : 1 });
  }
  else{
    res.render('index', { title: 'NewsFeed' });
  }
   
});

router.post('/auth_reg', function(req, res, next){

  var fullname = req.body.fullname;
  var email = req.body.email;
  var password = req.body.password;
  var cpassword = req.body.cpassword;

  if(cpassword == password){

    var sql = 'select * from user where email = ?;';

    con.query(sql,[email], function(err, result, fields){
      if(err) throw err;

      if(result.length > 0){
        req.session.flag = 1;
        res.redirect('/');
      }else{

        var hashpassword = bcrypt.hashSync(password, 10);
        var sql = 'insert into user(fullname,email,password) values(?,?,?);';

        con.query(sql,[fullname,email, hashpassword], function(err, result, fields){
          if(err) throw err;
          req.session.flag = 2;
          res.redirect('/');
        });
      }
    });
  }else{
    req.session.flag = 3;
    res.redirect('/');
  }
});



router.post('/auth_login', function(req,res,next){
  
  var fullname = req.body.fullname;
  var password =req.body.password;

  var sql = 'select * from user where fullname = ?;';
  
  con.query(sql,[fullname], function(err,result, fields){
    if(err) throw err;

    if(result.length && bcrypt.compareSync(password, result[0].password)){
      req.session.fullname = fullname;
      res.redirect('/Login');
    }else{
      req.session.flag = 4;
      res.redirect('/');
    }
  });
});



router.get('/Login', function(req, res, next){
  res.render('home', {message : ' ' + req.session.fullname});
});

router.get('/logout', function(req, res, next){
  if(req.session.fullname){
    req.session.destroy();
    res.redirect('/');
  }
})

module.exports = router;
