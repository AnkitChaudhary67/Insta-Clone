const mongoose= require('mongoose');

const db= `mongodb+srv://ankit67:9779117178@cluster0.vd1ve63.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db, {
useNewUrlParser: true,
useUnifiedTopology:true
}
).then(()=>{
    console.log('db connect');
}).catch((e)=>{
    console.log(e, 'error');
})