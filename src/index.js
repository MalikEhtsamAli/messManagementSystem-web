const express = require("express");
const path = require("path");
// here variables
port = 9002;
serverAdress = '127.0.0.1'
const app = express();

// get file path
const indexPath = path.join(__dirname,'../public'); 

app.use(express.static(indexPath));
// routes
app.get("/" , (req, res) => {
    res.send("this si no");
})

// listener
app.listen(port, serverAdress);

