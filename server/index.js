const express = require('express');
const app = express();


app.get('/', (req, res, next) => {

    res.json({api:"Welcome to our App"})
})



const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server running on ${PORT}`);
});