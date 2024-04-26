const express = require('express');
const  app = express();

app.use("/", (req,res) => {
    res.send("server is running")
})

app.listen(3001, ()=> {
    console.log("Server started on port 3001")
})

module.exports = app;
