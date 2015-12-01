var mongoose = require('mongoose');
module.exports = function(app) {
	app.get('/discussion', function(req,res){
		discussion.showDiscussion(req,res)
	});
	app.post('/discussion/creates', function(req,res){
		discussion.createDiscussion(req,res)
	});
}