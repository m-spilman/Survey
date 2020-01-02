const express = require("express");
const app = express();
const dbConfigs = require("./knexfile.js");
const db = require("knex")(dbConfigs.development);
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
// const adminPage = require ('./front/frontend//public/admin.html')

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

  })



})


//    --- GETS -----

app.get('/exportData', function (req,res){
   getTableData(req, res, db)
 })



// app.get('/admin', function(req,res){
//   res.sendFile(__dirname +'/front/frontend//public/admin.html')
  // res.send('banana')
  // })

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

  await db('survey').insert({survey:survey})

 }

module.exports = app;