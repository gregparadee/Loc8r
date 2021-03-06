var mongoose = require( 'mongoose' );

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closng: String,
    closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema ({
    author: String, 
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});

var locationSchema = new mongoose.Schema({
    name: {type:String, requried: true},
    address: String,
    rating: {type:Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    openingtimes: [openingTimeSchema],
    reviews: [reviewScehma]
});

