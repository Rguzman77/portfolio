import express from "express";
import cors from "cors";
import router from "./routes/cv.route";


const app = express();
app.use(express.json());
app.use(router);

// START SERVER
const PORT = 3001
const server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//create MVC functions.
