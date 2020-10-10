const express = require('express');
const fs = require('fs');
const app = express();

//dev = developement, public != developer
app.set('status', 'dev');
app.set('port', 8080);
app.set('auth-token', '123huzed7c237861273ec8feuz92u0mgß429uf3c891z4');

app.use('/*', function (req, res, next) {
    console.log('[LOG] Requesting ' + req.url);
    next();
})
app.use('/public/', express.static('public'));

app.get('/', function (req, res) {
    res.status(200).sendFile(__dirname +'/public/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Webservice is running on http://localhost:' + app.get('port'));
});

module.exports = {

}