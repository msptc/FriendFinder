var friendData = require('..data/friends.js');
var path = require('path');

module.exports = function(app){
    // api GET request
    app.get('/api/list', function(req, res){
        res.json(friendData);
    });
    // api post request - when data is submitted to the server
    app.post('/api/list', function(req,res){
        var lowestDifference = 50;
        var match;
        friendData.forEach(function(storedUserObject){
            var difference = 0;
            for (i=0; i<storedUserObject.friendNumbers.length; i++){
                difference+=Math.abs(storedUserObject.friendNumbers[i] - req.body.friendNumbers[i]);
            } if (difference<lowestDifference){
                lowestDifference = difference;
                match = storedUserObject;
            }
        });

        res.json(match);
        friendData.push(req.body);

        app.post('/api/clear', function(req, res){
            friendData = [];

            console.log(friendData)
        })
    })
}