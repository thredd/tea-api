const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'china',
        'waterTemp': 200,
        'steepTimeSeccs': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'japan',
        'waterTemp': 250,
        'steepTimeSeccs': 180,
        'caffinated': false,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeccs': 0,
        'caffinated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) =>  {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})