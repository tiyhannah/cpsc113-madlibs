var lodash = require('lodash');

var adjectives = [
    'short',
    'crafty',
    'wiley’,
    ‘lovely’
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(adjectives);
};