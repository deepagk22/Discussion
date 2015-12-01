var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
 topic: String,
 desc: String,
 c:{type: Schema.ObjectId, ref: 'Customer'}
});
var Order = mongoose.model('Order', OrderSchema);
