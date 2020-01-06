import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Disclaimer from './disclaimer'
import SameUser from './SameUser'
const uuidv4 = require('uuid/v4')
var model =''
let survey = {}


export default class App extends Component {
  
  state = {
    acceptedDisclaimer: false,
    uuid: '',
    items: [],
    sameUser:'no'
  }


onComplete = (survey, options) => {
var xhr = new XMLHttpRequest();
var url = "http://localhost:3001/results";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
let rawData = {
  data:survey.data,
  uuid: this.state.uuid
}
var data = JSON.stringify(rawData)
xhr.send(data);

 }
// function baseUrl () {
//   if (inProductionMode) {
//     return ''
//   }
//   return 'https://localhost:573753/api/'
// }

 accept =() =>{
   this.setState({
     uuid: uuidv4(),
     acceptedDisclaimer: true,
     items : [],
   })

 
}
getData =  () => {
  fetch('http://localhost:3001/exportData')
  .then(response => response.json())
  .then(items => this.setState({items}, function (){
  }))
  .catch(err => console.log(err))
}

getSurvey = () => {
  fetch('http://localhost:3001/getSurvey')
  .then(response => response.json())
  .then(function(results){
    if(results.length!== 0)
    survey = results[0].data
  }).then(function(){
    model = new Survey.Model(survey);
  })
}
componentDidMount(){
  this.getSurvey()
  this.getData()
  if(localStorage.getItem('sameUser'))
  {
    this.setState({
      sameUser: 'yes'
    })
  }
}

componentWillUpdate()
{
  localStorage.setItem('sameUser', 'yes')
}

render() {
  if(this.state.sameUser === 'yes'){
    return <SameUser></SameUser>
  }
  if(this.state.acceptedDisclaimer === true){
   return  <Survey.Survey model={model} onComplete={this.onComplete}/>
  }
  if(this.state.acceptedDisclaimer === false){
    return <Disclaimer accept = {this.accept.bind(this)}></Disclaimer>
  }
 
 
  
 }
} 