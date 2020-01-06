
import { CSVLink } from "react-csv"
import React,{Component} from "react";

class ReviewData extends Component {

    state = { isLoaded:false,
              surveyResults: []
            }

    componentDidMount() {
       fetch('http://localhost:3001/exportData')
        .then(response => response.json())
        .then(surveyResults => this.setState({surveyResults}, function (){
            this.setState({
                isLoaded: true,
              })
        }))
    }
      render() {
        const {surveyResults, isLoaded} = this.state
   

        if(!isLoaded){
            return <div>Collecting Data...</div>
        }
        return  (<CSVLink
            filename={"db.csv"}
            color="primary"
            style={{float: "left", marginRight: "10px"}}
            className="btn btn-primary"
            data={surveyResults}>
            Download CSV
          </CSVLink>)
}
}
export default ReviewData