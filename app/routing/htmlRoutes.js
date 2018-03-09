var path = require('path');

module.exports = function(app){
    // html GET requests
    app.get('/', function (req, res){
        res.sendFile(path.join(_dirnam + /../public/home.html));
    });

    app.get('/', function(req,res){
        res.sendFile(path.join(_dirname + '/../public/survey.html'));
    });
}