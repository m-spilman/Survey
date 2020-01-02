// import React from 'react'
import React,{Component} from "react";

class Admin extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "surveyCreator.js";
        this.div.appendChild(script);
    }

render() {
    return (


       
<div>
    <form action=' http://localhost:3001/saveSurvey' method="post">
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Please Copy and Paste JSON object here:</label>
    <textarea className="form-control" id="exampleFormControlTextarea1"  name="survey" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
    </form>

        
        <div id="surveyContainer" ref={el => (this.div = el)}>
            <div id="creatorElement"></div>
        </div>
</div>
         

       
        

    )
  }
}
export default Admin





