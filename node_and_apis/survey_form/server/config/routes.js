module.exports = function (app) {

    app.get('/', function(req, res){
        console.log('someone hit the / route');
        res.render('index');
    })

    app.post('/submit', function(req, res){
        console.log('someone posted to /submit');
        // res.render('')
        res.send("hi");
    })

}