import express from "express";
import cors from "cors";
import path from "path";

//Express App
const app = express();

//CORS Policy
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../public"));

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

// Routes Import
import contactRoute from "./routes/contact.route.js";

// Routes Declaration
app.use("/devonboard/api/v1", contactRoute);

//Exporting App
export { app };
