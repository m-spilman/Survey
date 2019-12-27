import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Disclaimer from './disclaimer'
const bodyParser = require("body-parser");
const uuidv4 = require('uuid/v4')
let survey = require("./dummy-front");



export default class App extends Component {
  
  state = {
    acceptedDisclaimer: false,
    uuid: '',
    survey: '',
    steve: 2
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

 accept =() =>{
   this.setState({
     uuid: uuidv4(),
     acceptedDisclaimer: true,
     survey: survey

   })
}

 render() {

  var model = new Survey.Model(survey);

  if(this.state.acceptedDisclaimer === true){
   return  <Survey.Survey model={model} onComplete={this.onComplete}/>
  }
  if(this.state.acceptedDisclaimer === false){
    return <Disclaimer accept = {this.accept.bind(this)}></Disclaimer>
  }
  
 }
} 