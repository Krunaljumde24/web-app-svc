const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Aaaruuuu...')
})

app.post('/', (req,res)=>{
    res.send('Got a request from POST API.')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080.');
})