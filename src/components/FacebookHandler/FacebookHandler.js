import React, {PropTypes, Component} from 'react'
import FacebookLogin from 'react-facebook-login'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'


class FacebookHandler extends Component {
    constructor(props, context){
        super (props, context)
        this.state = {
            open: true
        }
        this.handleClose = this.handleClose.bind(this)
        this.componentClicked = this.componentClicked.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
        this.handleToggleUnauth = this.handleToggleUnauth.bind(this)
    }

    handleOpen () {
        this.setState({ open: true })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    handleToggleUnauth() {
        this.handleClose()
        this.props.toggleAllowUnauth()
    }

    responseFacebook(response) {
        console.log('logging in message',response)
        if(response.status && response.status == "not authorized") {
            console.log('rejected muthafucker')
        } else if ( response.accessToken) {
            console.log('yo were in')
            this.handleClose()
            this.props.onFbLogin()          
        }

    }

    componentClicked(){
        console.log('clicked')
    }

    render () {

        const actions = [
            <FacebookLogin 
                    appId="1578557435779440"
                    scope="public_profile,email"
                    autoLoad={true}
                    size="medium"
                    fields="name, email, picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    />,
            <FlatButton
                label="No Auth"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleToggleUnauth}
            />
        ]

        return (
            <div>
                <Dialog
                    title="Login with Facebook"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    Or select No Auth to bypass Facebook login
                </Dialog>
            </div>
        )
    }
}

FacebookHandler.propTypes = {
    onFbLogin: PropTypes.func.isRequired,
    toggleAllowUnauth: PropTypes.func.isRequired
}

export default FacebookHandler