require('dotenv').config() //dotenv

const express = require('express') //we have express now

const app = express() //app - powerful , made using express

const port = 4000


//it's listening on /
app.get('/', (req, res) => { //get request
  res.send('Hello World!')
})

//it is also listening on /twitter
app.get('/twitter', (req,res) => {
    res.send('tanmmayi_sings') //sending response if someone goes to /twitter
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})