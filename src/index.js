import dotenv from "dotenv";
import dbConnection from "./db/db.connection.js";
import app from "./app.js";
dotenv.config({ path: "./.env" })


dbConnection()
    .then(() => {

        app.on("error", () => {
            console.log("App is not running after db connection");
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log("App is running at port >> ", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log("Some error occured >>> ", error);
    })




















/*
=========================================================================
const app = express();
(async () => {
    try {
        const dbObject = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB object of >> ", dbObject.connection.host);

        app.listen(process.env.PORT || 8000, () => {
            console.log("App is running on port ", process.env.PORT);
        })
    } catch (error) {
        console.log("The error is >> ", error);
    }
})()
*/