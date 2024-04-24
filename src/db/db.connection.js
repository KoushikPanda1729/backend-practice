import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnection = async () => {
    try {
        const dbObject = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(dbObject.connection.host);
    } catch (error) {
        console.log("The error is >>> ", error);
        process.exit(1);
    }
}

export default dbConnection