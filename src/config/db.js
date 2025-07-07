import mongoose  from "mongoose";
import "dotenv/config"

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODBTLASURI)
        console.log("mongoldb connect");
    } catch (error) {
        console.log("no funcion | error:", error);
    }
}

export default connectDB