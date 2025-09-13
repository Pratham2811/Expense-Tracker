import mongoose from "mongoose";

const connectDB=async ()=>{
    try{    console.log(process.env.MONGO_URI);
          await mongoose.connect(process.env.MONGO_URI,{});

          console.log("Database Connected");
      
          
          
    }catch(err){
        console.log("Error While connecting to mongo DB");
        process.exit(1);
        
    }
}
export default connectDB