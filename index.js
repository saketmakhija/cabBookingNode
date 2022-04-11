const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',route );

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});