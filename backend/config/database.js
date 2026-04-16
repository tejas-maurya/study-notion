const mongoose =require("mongoose");
require("dotenv").config();
exports.connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    }
    catch(err){
    console.error();
}
then(()=>{
    console.log("MongoDB connection closed");
})
}