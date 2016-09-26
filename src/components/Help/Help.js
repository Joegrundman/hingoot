import React, {PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import './Help.css'

const Help = ({handleCloseHelp, showHelp}) => (
           <div className="Help">
                <Dialog
                    title="Help"
                    actions={[
                        <FlatButton
                            label="Cancel"
                            primary={true}
                            onTouchTap={handleCloseHelp}
                        />
                    ]}
                    modal={false}
                    open={showHelp}
                    onRequestClose={handleCloseHelp}
                    >
                Type area in which you wish to go out.
                You can see how many users go to the different venues
                You can click to say you are going to a venue. 
                Clicking again will undo you decision.

                You can bypass the facebook auth. it is only for demo


                </Dialog>       
            </div>    
)

Help.propTypes = {
    showHelp: PropTypes.bool.isRequired,
    handleCloseHelp: PropTypes.func.isRequired
}

Help.defaultProps = {
    showHelp: false
}

export default Help