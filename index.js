require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.static('build'))
const Person = require('./models/person')

app.use(cors())
app.use(bodyParser.json())
let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
]

// mongoDB化 完了
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJSON()))
  })
})

// mongoDB化 完了?
// :idが見つからなかった時の処理書いてないけどいいのかこれ？=>お手本が書いてないからいいよ
app.get('/api/persons/:id', (req, res) => {
  const person = Person.findById(req.params.id).then(person => {
    res.json(person.toJSON())
  })
})

// app.get('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id)
//   const person = persons.find(n => n.id === id)
//   if (person) {
//     res.json(person)
//   } else {
//     res.status(404).end()
//   }
// })

// app.get('/', (req, res) => {
//   res.send('<h1>Hey World!</h1>')
// })

// app.get('/info', (req, res) => {
//   const NumberOfPersons = persons.length
//   const content = `<p>Phonebook has info for ${NumberOfPersons} people</p><p>${new Date()}</p>`
//   res.send(content)
// })

// mongoDB化 完了?
app.get('/info', (req, res) => {
  const NumberOfPersons = Person.length
  const content = `<p>Phonebook has info for ${NumberOfPersons} people</p><p>${new Date()}</p>`
  res.send(content)
})

// const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
// const generateId = () => getRandomInt(2 ** 50)

// app.post('/api/persons', (req, res) => {
//   const body = req.body

//   if (!body.name || !body.number) {
//     return res.status(404).json({ error: 'name or number is missing' })
//   }

//   const ExistSameName = obj => obj.name === body.name
//   if (persons.some(ExistSameName)) {
//     return res.status(404).json({ error: 'name must be unique' })
//   }

//   const person = {
//     name: body.name,
//     number: body.number,
//     id: generateId(),
//   }
//   persons = persons.concat(person)
//   res.status(201).json(person)
// })

// mongoDB化 完了
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(404).json({ error: 'name or number is missing' })
  }

  const ExistSameName = obj => obj.name === body.name
  if (persons.some(ExistSameName)) {
    return res.status(404).json({ error: 'name must be unique' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  // persons = persons.concat(person)
  // res.status(201).json(person)
  person.save().then(savedPerson => {
    res.json(savedPerson.toJSON())
  })
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(n => n.id !== id)
  res.status(204).end()
})

app.put('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(n => n.id === id)
  const changePerson = {
    ...person,
    name: req.body.name,
    number: req.body.number,
  }
  persons = persons.map(n => (n.id === id ? changePerson : n))
  res.status(200).json(changePerson)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
