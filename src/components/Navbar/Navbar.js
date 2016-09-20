import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.handleAuthClick = this.handleAuthClick.bind(this)
    }

    handleAuthClick(){
        this.props.toggleAllowUnauth()
    }

    render () {
        return (
            <AppBar 
                title={this.props.title}
                iconElementLeft={
                    <IconButton><NavigationClose /></IconButton>
                }
                iconElementRight={
                <IconMenu
                    iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Help" onClick={this.props.toggleShowHelp}/>
                    <MenuItem primaryText={this.props.needsAuth ? "Allow Unauth" : "Require Auth" } onClick={this.handleAuthClick}/>
                </IconMenu>
                     }
            />
        )
    }
}

Navbar.propTypes = {
    toggleAllowUnauth: PropTypes.func.isRequired,
    needsAuth: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

export default Navbar