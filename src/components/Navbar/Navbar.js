import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const Navbar = ({toggleAllowUnauth, toggleShowHelp, needsAuth}) => (
        <AppBar 
        title="Hingoot"
        iconElementLeft={
            <IconButton>
            <NavigationClose />
            </IconButton>
        }
        iconElementRight={
        <IconMenu
            iconButtonElement={
            <IconButton>
            <MoreVertIcon />
            </IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Help" onClick={toggleShowHelp}/>
            <MenuItem primaryText={needsAuth ? "Allow Unauth" : "Require Auth" } onClick={toggleAllowUnauth}/>
        </IconMenu>
        }
    />
)

Navbar.propTypes = {
    needsAuth: PropTypes.bool.isRequired,
    toggleAllowUnauth: PropTypes.func.isRequired,
    toggleShowHelp: PropTypes.func.isRequired
}

Navbar.defaultProps = {
    needsAuth: true
}

export default Navbar