const mongoose= require('mongoose');

const postSchema = new mongoose.Schema({
    image:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    decription:{
        type: String,
        required:true
    }
})
 
const Post= new mongoose.model("POST", postSchema);

module.exports=Post;