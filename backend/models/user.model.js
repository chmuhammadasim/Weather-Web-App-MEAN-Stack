const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {
        type: Number,
        unique: true,
        sparse:true
    },
     name: {
        type: String
    },
     email: {
        type: String,
        unique: true,
        sparse:true
    },
     password: {
        type: String,
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    city:[{ 
        type: String,
    },],
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }

module.exports = mongoose.model("User", User);