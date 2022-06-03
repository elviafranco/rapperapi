const express = require('express')
const app = express()
const port = 8000

const rappers =  {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(__dirname + '/index.html')
})

//The colon :rapperName lets express know we're working with a query parameter
app.get('/api/:rapperName', (req, res) => {
    // .toLowerCase handles casing
    const rappersName = req.params.rapperName.toLowerCase()
    // dot notation doesn't play well with spaces so we use bracket notation here
    if (rappers[rappersName]){
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['unknown'])
    }
    })

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})