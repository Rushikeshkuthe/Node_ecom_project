const mongoose =  require('mongoose');

uri = "mongodb+srv://rushi:DXsimT7Zh9IcjA2B@cluster0.gohdudn.mongodb.net/Cluster0?retryWrites=true&w=majority";




const connectDB =() => {
    console.log('connect database');
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports=connectDB;