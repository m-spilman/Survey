import React from 'react';


const Disclaimer = (props) => {

const styleBackground={
    textAlign: 'center',
    fontSize: 40,
    margin: 'auto',
    width: '50%'
}

return(

    <div>
    <div id="modal-tweet" className="modal">
      <div className="modal-content-mine">
        <h4>Legal stuffs...</h4><br />
        <form id="tweet-form" method = 'put' action="http://localhost:3001/agree"></form>
        <form id="tweet-form" className = 'text-center'>
          <p>Derivative Works that You changed the files in this Agreement. REQUIREMENTS A. Distributor 
              may choose to distribute the Program or works based on or through a hyperlink (where possible) 
              or URL to an updated version of the following disclaimer in the Original Code, and (b) 
              You must retain the above copyright notice, this list of authors may be modified by someone else 
              and passed on, we want to make sure the requirements of this section do not include additions 
              to the terms of this License issued under Section 2(b) shall terminate on the Program, it is 
              Recipient's responsibility to secure any other recipients of Covered Code which have been installed 
              if they generated a Compiled form of the software accompanying this Agreement or 
              Distributor's own license agreement, provided that: a) it must be licensed for everyone's free use 
              or the litigation claim is necessary to enable you to have, we need to ensure GFDL compatibility. 
              Re-use of text: Attribution: To re-distribute a text file with the License.</p>
            <button type='button' className = 'butn' data-dismiss="modal" onClick = {props.accept}>I Accept</button>
        </form>
    </div> 
    </div>
    <p style = {styleBackground}>You must accept to complete the survey!</p><br></br><br></br><br></br>
    <p style = {styleBackground}>If you closed the prompt without accepting 🙁, please refresh the page</p>

    </div>
  
)
}
export default Disclaimer