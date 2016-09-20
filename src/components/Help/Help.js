import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import './Help.css'


class Help extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.isOpen
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen () {
        this.setState({open: true})
    }

    handleClose () {
        this.setState({open: false})
        window.setTimeout(() => this.props.toggleShowHelp(), 1000)

    }

    render() {
        const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
        />
        ]
        return (
            <div className="Help">
                      <Dialog
          title="Help"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Type area in which you wish to go out.
          You can see how many users go to the different venues
          You can click to say you are going to a venue. 
          Clicking again will undo you decision.

          You can bypass the facebook auth. it is only for demo


        </Dialog>
            
            </div>
        )
    }
}

export default Help