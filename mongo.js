const mongoose = require('mongoose')

if (process.env.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://hatahata:${password}@cluster0-yrsen.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
  const name = process.argv[3]
  const phoneNumber = process.argv[4]
  const person = new Person({
    name,
    phoneNumber,
  })
  person.save().then(res => {
    console.log(`added ${res.name} number ${res.phoneNumber} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name, person.phoneNumber)
    })
    mongoose.connection.close()
  })
}
