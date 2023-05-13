const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send(`Running?`)
})
app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  }
  console.log(`Server is running on port: ${port}`);
});