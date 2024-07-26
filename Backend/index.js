const express = require('express');
const mongoose=require("mongoose");
const bookRoute = require("./route/book");
const userRoute=require("./route/user");
const cors = require("cors");
const app = express();
const port = 3000
app.use(cors());

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/bookStore').then(e=>console.log('MongoDb connected'))
.catch(e=>console.log("error",data));

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})