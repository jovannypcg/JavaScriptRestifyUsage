var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser({ mapParams: false }));

server.get('/hello', function(req, res) {
    console.log('Type of req.query: ' + typeof req.query);
    console.log('Type of req.query.names: ' + typeof req.query.names + '\n');

    console.log(JSON.stringify(req.query, null, 2));
    console.log("\n'name' is in req.query:  " + ('name' in req.query) + '\n');

    console.log('Size of req.query: ' + Object.size(req.query));
    console.log('Size of req.query.names: ' + Object.size(req.query.names) + '\n');
    console.log(JSON.stringify(req.query.names, null, 2));
    
    res.json(req.query.names);
});

server.listen(8080, () => console.log('Listening at port 8080 =)'));

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (key in obj) size++;
    }
    return size;
};
