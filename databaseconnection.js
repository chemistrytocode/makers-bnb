var pg = require('pg');
var connectionString = "postgres://id8771057_makersbnb:£babyhippo@babyhippo.000webhostapp.com/localhost/id8771057_makersbnb"

var pgClient = new pg.Client(connectionString);

pgClient.connect();

var query = pgClient.query("Select * from users");
