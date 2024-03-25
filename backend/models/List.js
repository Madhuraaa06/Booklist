const mongoose = require('mongoose');
const {Schema} = mongoose;

const Userschema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true,
       
    },
    genre:{
        type: String,
        default: "General"
    },

    rating:{
        type: Number,
        default:0,
    },
    
    date:{
        type: Date,
        default: Date.now
    }
    
})

const List = mongoose.model('List', Userschema);
module.exports = List;