import React from "react";

const Disclaimer = props => {

  return (
    <div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Legal Stuffs</h4>
            </div>
            <div className="modal-body">
              <p>
                Derivative Works that You changed the files in this Agreement.
                REQUIREMENTS A. Distributor may choose to distribute the Program
                or works based on or through a hyperlink (where possible) or URL
                to an updated version of the following disclaimer in the
                Original Code, and (b) You must retain the above copyright
                notice, this list of authors may be modified by someone else and
                passed on, we want to make sure the requirements of this section
                do not include additions to the terms of this License issued
                under Section 2(b) shall terminate on the Program, it is
                Recipient's responsibility to secure any other recipients of
                Covered Code which have been installed if they generated a
                Compiled form of the software accompanying this Agreement or
                Distributor's own license agreement, provided that: a it must
                be licensed for everyone's free use or the litigation claim is
                necessary to enable you to have, we need to ensure GFDL
                compatibility. Re-use of text: Attribution: To re-distribute a
                text file with the License.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={props.accept}
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
export default Disclaimer;
