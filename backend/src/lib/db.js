import mongoose from "mongoose";

export const DatabaseConneect = async () => {
    try {const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error("MongoDB connection error",error);
    }
}


