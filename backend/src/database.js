import mongoose from 'mongoose';

(async() =>{
    try {
        const db = await mongoose.connect('mongodb://localhost/Fitnessapp',{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('db is connected ' , db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()