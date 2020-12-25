const express = require('express');
const server = express();
server.use(express.json())
    // lay du lieu
server.get('/Hello', function(request, response) {
    response.json({
        message: "Hello",
    })
})

// them du lieu
server.post('/', (req, res) => {
    const name = req.body.name;
    // luu du lieu vao database
    res.json({
        message: "OK",
        name: name,
    })

})
server.listen(8080);