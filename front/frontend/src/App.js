import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Disclaimer from './disclaimer'
import ReviewData from './reviewData'
import { CSVLink } from "react-csv"
const uuidv4 = require('uuid/v4')
let survey = require("./dummy-front");




export default class App extends Component {
  
  state = {
    acceptedDisclaimer: false,
    uuid: '',
    survey: '',
    // steve: 2,
    items: []
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
     survey: survey,
     items : []

   })
}


getData =  () => {
  fetch('http://localhost:3001/exportData')
  .then(response => response.json())
  .then(items => this.setState({items}))
  .catch(err => console.log(err))
}
componentDidMount(){
  this.getData()
  const script = document.createElement("script");

  script.src = "surveyCreator.js";
  script.async = true;

  document.body.appendChild(script);
}

 render() {

  var model = new Survey.Model(survey);
  
  if(this.state.steve === 2){
    return  (<CSVLink
    filename={"db.csv"}
    color="primary"
    style={{float: "left", marginRight: "10px"}}
    className="btn btn-primary"
    data={this.state.items}>
    Download CSV
  </CSVLink>)
  }

  if(this.state.acceptedDisclaimer === true){
   return  <Survey.Survey model={model} onComplete={this.onComplete}/>
  }
  if(this.state.acceptedDisclaimer === false){
    return <Disclaimer accept = {this.accept.bind(this)}></Disclaimer>
  }
 
  
 }
} 