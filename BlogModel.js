const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blogID: {
        type: String,
        required: true,
        unique: true
    },

    bloggerName: {
        type: String,
        required: true
    },

    bloggerPosition: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    
    titleo: {
        type: String,
        required: true  //sss
    },

    content: {
        type: String,
        required: true
    },

    bloggerImage: {
        type: String
    }
})

const blogData = mongoose.model("Blog", BlogSchema);
module.exports = blogData;