var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leaderships = require('../models/leaderships');
var Verify = require('./verify');

var leadershipRouter = express.Router()

leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.get(function(req,res,next){
    Leaderships.find(req.query)
               .exec(function (err, leaderships) {
                  if (err) next(err);
                  res.json(leaderships);
                });
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Leaderships.create(req.body, function (err, leadership) {
        if (err) next(err);
        console.log('leadership created!');
        var id = leadership._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the leadership with id: ' + id);
    }); 
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Leaderships.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});

leadershipRouter.route('/:leaderId')
.get(Verify.verifyOrdinaryUser, function(req,res,next){
  Leaderships.findById(req.params.leaderId, function (err, leadership) {
    if (err) next(err);
    res.json(leadership);
  });
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
  Leaderships.findByIdAndUpdate(req.params.leaderId, {
    $set: req.body
  }, {
    new: true
  }, function (err, leadership) {
    if (err) next(err);
    res.json(leadership);
  });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
  Leaderships.findByIdAndRemove(req.params.leaderId, function (err, resp) {        if (err) next(err);
    res.json(resp);
  });
});

module.exports = leadershipRouter;