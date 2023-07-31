const mongoose = require('mongoose');

//connect to local mongoose db to cloud
mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to mongoDB ${db.name} and ${db.host}:${db.post}`);
})