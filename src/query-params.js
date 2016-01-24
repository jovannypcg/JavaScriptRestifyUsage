s script shows how to get the query attributes when
 * a GET request is made.
 *
 * Sample:
 *
 * To execute:  
 *      $ node query-params.js
 *
 * To test:
 *      Go to your browser and type:
 *
 *      http://localhost:8080/hello?names=jovanny&names=pablo&names=cruz
 *
 * @author  Jovanny Pablo Cruz Gomez
 *          Software Engineer
 *          jovannypcg@yahoo.com
 */

/**
 * For using restify.
 */
var restify = require('restify');

/**
 * Creates the server based on restify.
 */
var server = restify.createServer();
server.use(restify.queryParser({ mapParams: false }));

/**
 * Registers a get request into the server with the function
 * sent as parameter. This function will be executed when
 * a request is detected at host:port/hello.
 */ 
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

/**
 * Gets the size of the object sent as parameter.
 */
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (key in obj) size++;
    }
    return size; 
};

