var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Favorites are a list of dishes associated with a user. The dishes
// and user are identified by their ObjectId. The dishes are assumed to
// be unique.

var favoriteSchema = new Schema({
  dishes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dish',
    unique: true
  }],
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;