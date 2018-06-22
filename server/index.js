const express = require('express');
const app = express();
const cron = require('node-cron');



app.get('/', (req, res, next) => {
    res.json({api:"Welcome to our App"})
})

cron.schedule('1,2,4,5 * * * *', function(){
  console.log('running every minute 1, 2, 4 and 5');
});




const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server running on ${PORT}`);
});