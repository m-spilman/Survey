const express = require("express");
const app = express();
const dbConfigs = require("./knexfile.js");
const db = require("knex")(dbConfigs.development);
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const fs = require("fs");
const createPage = fs.readFileSync("./creator/creator.html", "utf8")
const whereTo = fs.readFileSync('whereTo.html', 'utf8')



app.use(express.json())
app.use(express.urlencoded())
app.use(logger('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.listen(port, function() {
    console.log("Runnning on " + port);
  })
// ---- POSTS -----  

app.post('/results', function(req, res){
     let answers = req.body.data
     let  id = req.body.uuid

        saveAnswers(answers, id).then(function(){})
})

app.post ('/saveSurvey', function (req, res){
  saveSurvey(req.body.survey ).then(function(){
    res.send(adminPage)

  })
})
app.post('/admin', function(req,res){
  if(req.body.username === '' && req.body.password === ''){ 
    res.send(whereTo)
  }
  else res.redirect('http://localhost:3000/admin')
})

//    --- GETS -----

app.get('/exportData', function (req,res){
   getTableData(req, res, db)
 })

 app.get('/getSurvey', function (req,res){
   getSurvey().then(function(response){
     res.send(response)
   })
 })
 app.get('/createSurvey', function (req,res){
   res.send(createPage)

 })


//   --- FUNCTIONS -------

const getTableData = (req, res, db) => {
  db.select('*').from('answers')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

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
async function saveSurvey(survey) {

  await db('survey').insert({data:survey})

 }

 function getSurvey(){
  return db.select('*').from('survey')
 }

module.exports = app;
