 const mongoose = require('mongoose');

(async () =>{
    const db = await mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
    //console.log('Connected to:', db.connection.name)
})(); 