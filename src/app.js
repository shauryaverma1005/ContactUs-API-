import express from "express"
import cors from "cors"

//Express App
const app = express()

//CORS Policy
app.use(cors({
    origin: ["*"],
    credentials: true
}))

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("../public"))

//EJS Template
app.set("view engine", "ejs");

// Routes Import
import contactRoute from "./routes/contact.route.js"

// Routes Declaration
app.use("/devonboardAPI", contactRoute);

//Exporting App
export  {app }
