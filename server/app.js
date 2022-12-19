const express= require('express');
const app=express();
const cookieParser= require('cookie-parser');
const { default: createPost } = require('../insta-clone/src/components/create-post');
const Post = require('./models/postSchema');
const port=process.env.PORT || 8000;


// connect db
require('./db/connection')


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.post('/create-post',async(req,res)=>{
    try {
        const { url, author, location,description  }=req.body;
        if(!url || !author || !location || !description){
            res.status(400).send('Please Fill all the Fields')
        }
        const createPost= new Post({
            image:url,
            author,
            location,
            description:desc,
        })
        await createPost.save();
        res.status(200).send('Create Post Successfully')
    } catch (error) {
        res.status(500).send('Error' + error)
    }
})

app.listen(port,()=>{
    console.log('Server is running');
})