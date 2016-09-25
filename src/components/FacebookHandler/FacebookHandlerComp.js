import React, {PropTypes} from 'react'
import FacebookLogin from 'react-facebook-login'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'


// class FacebookHandler2 extends Component {
//     constructor(props, context){
//         super (props, context)
//         this.state = {
//             open: true
//         }
//         this.handleClose = this.handleClose.bind(this)
//         this.componentClicked = this.componentClicked.bind(this)
//         this.responseFacebook = this.responseFacebook.bind(this)
//         this.handleToggleUnauth = this.handleToggleUnauth.bind(this)
//     }

//     handleOpen () {
//         this.setState({ open: true })
//     }

//     handleClose() {
//         this.setState({
//             open: false
//         })
//     }

//     handleToggleUnauth() {
//         this.handleClose()
//         this.props.toggleAllowUnauth()
//     }

//     responseFacebook(response) {
//         console.log('logging in message',response)
//         if(response.status && response.status == "not authorized") {
//             console.log('rejected muthafucker')
//         } else if ( response.accessToken) {
//             console.log('yo were in')
//             this.handleClose()
//             this.props.onFbLogin()          
//         }

//     }

//     componentClicked(){
//         console.log('clicked')
//     }

//     render () {

//         const actions = [
//             <FacebookLogin 
//                     appId="1578557435779440"
//                     scope="public_profile,email"
//                     autoLoad={true}
//                     size="medium"
//                     fields="name, email, picture"
//                     onClick={this.componentClicked}
//                     callback={this.responseFacebook}
//                     />,
//             <FlatButton
//                 label="No Auth"
//                 primary={true}
//                 keyboardFocused={true}
//                 onTouchTap={this.handleToggleUnauth}
//             />
//         ]

//         return (
//             <div>
//                 <Dialog
//                     title="Login with Facebook"
//                     actions={actions}
//                     modal={false}
//                     open={this.state.open}
//                     onRequestClose={this.handleClose}>
//                     Or select No Auth to bypass Facebook login
//                 </Dialog>
//             </div>
//         )
//     }
// }

const FacebookHandler = (responseFacebook, toggleAllowUnauth, facebookDialogIsOpen, handleFbDialogClose) => (
            <div>
                <Dialog
                    title="Login with Facebook"
                    actions={[
                        <FacebookLogin 
                                appId="1578557435779440"
                                scope="public_profile,email"
                                autoLoad={true}
                                size="medium"
                                fields="name, email, picture"
                                callback={responseFacebook}
                                />,
                        <FlatButton
                            label="No Auth"
                            primary={true}
                            keyboardFocused={true}
                            onTouchTap={toggleAllowUnauth}
                        />
                    ]}
                    modal={false}
                    open={facebookDialogIsOpen}
                    onRequestClose={handleFbDialogClose}>
                    Or select No Auth to bypass Facebook login
                </Dialog>
            </div>   
)

FacebookHandler.propTypes = {
    responseFacebook: PropTypes.func.isRequired,
    toggleAllowUnauth: PropTypes.func.isRequired,
    facebookDialogIsOpen: PropTypes.bool.isRequired,
    handleFbDialogClose: PropTypes.func.isRequired
}

FacebookHandler.defaultProps = {
    facebookDialogIsOpen: false
}

export default FacebookHandler