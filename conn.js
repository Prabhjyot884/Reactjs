const mongoose = require('mongoose');

const db = process.env.DATABASE;

try{
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log('Mongodb connection successful'));
}
catch{
    (err) => console.log('no connection');
}

