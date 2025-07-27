import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    application.listen(process.env.port || 8000, () => {
        console.log(`Server is running at port :  ${process.env.port}`);
    })

})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})
