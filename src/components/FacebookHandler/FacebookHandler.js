import React, {PropTypes} from 'react'
import FacebookLogin from 'react-facebook-login'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

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