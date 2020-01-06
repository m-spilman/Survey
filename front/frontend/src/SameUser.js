import React from "react";

const SameUser = () => {

    return (
        <div>
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">Your Back?!</h4>
                </div>
                <div className="modal-body">
                  <p>
                   We appreciate your enthusiasm, but it looks like you've already taken our survey! 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

}
export default SameUser