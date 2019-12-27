const express = require("express");
const app = express();
const dbConfigs = require("./knexfile.js");
const db = require("knex")(dbConfigs.development);
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
// const uuidv4 = require('uuid/v4')

app.use(express.json())
app.use(express.urlencoded())
app.use(logger('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, function() {
    console.log("Runnning on " + port);
  })

app.post('/results', function(req, res){
     let answers = req.body.data
     let  id = req.body.uuid

        saveAnswers(answers, id).then(function(){})
})

async function saveAnswers(answers, id){

    const questions = Object.keys(answers)
    const responses = Object.values(answers)
    for(let i = 0; i< questions.length; i++)
    {
        let question = questions[i] 
        let answer = responses[i]
        await db('answers').insert({answer: answer,question: question, uid:id })

    }
}

async function saveUser(id){
    await db('user').insert({id: id}) 
}

module.exports = app;