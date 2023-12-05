const express = require("express");
const app = express();
const connection = require("../server/db");
const Routess = require("./routes/books");
const cors = require("cors");

connection();

app.use(express.json());
app.use(cors());

app.use("/api/books",Routess);

app.get("/",(req,res)=>{
    res.json({
        message:"done"
    })
})
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));