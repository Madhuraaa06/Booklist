const mongoose = require('mongoose');

const mongouri = "mongodb://127.0.0.1:27017/booklist"

const connecttoMongo = ()=>{

    mongoose.connect(mongouri)
        console.log("connected to mongo successfully")
    
}

module.exports= connecttoMongo;