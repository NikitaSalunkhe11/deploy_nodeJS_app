const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/",(req, res)=>{
    try {
        console.log("Nikita asjbcjka");
        res.status(200).send("Hello world nikita  hjsdfcyidsv");
    } catch (error) {
        res.send({error:error.message});
    }
});
app.post("/api",(re,res)=>{
    try {
        console.log("In post req");
        res.status(200).send("In post API request");
    } catch (error) {
        res.send(error.message)
    }
})
app.listen(PORT, ()=>{
    console.log("server is running on PORT ", PORT);
})