const express = require('express')
const app = express();

var movies = [
    { id: 101, name: "Jawan", year: 2023, rating: 7.2 },
    { id: 102, name: "Pushpa: The Rise - Part 1", year: 2021, rating: 7.6 },
    { id: 103, name: "K.G.F: Chapter 1", year: 2018, rating: 8.2 },
    { id: 104, name: "Dear Comrade", year: 2019, rating: 7.3 },
]

// /getMovieDetail/101 - use path variable
app.get('/getMovieDetail/:id', (req, res) => {
    let id = req.params['id'];
    console.log(id);
    let movieObj = movies.filter((mov) => {
        console.log(typeof (id));
        console.log(typeof (mov.id));
        if (mov.id == id)
            return mov;
    })
    console.log(movieObj);
    res.send(movieObj);
})

// getMovieDetailsByMovieName - use query param 
app.get('/getMovieDetailsByMovieName', (request, response) => {
    let movNm = request.query['movieName'];
    let movObj = movies.filter((mov) => {
        if (movNm == mov.name) {
            return mov;
        }
    })
    response.send(movObj)
})



app.get('/', (req, res) => {
    console.log(req.baseUrl);
    res.send('Welcome')
})

app.get('/callme', (req, res) => {
    let name = req.query['name'];
    console.log(req.query)
    res.send('Calling ' + name)
})

app.get('/movies', (request, response) => {
    response.send(movies)
})


app.listen(8080, (err) => {
    console.log('Server is running on port 8080.');
})