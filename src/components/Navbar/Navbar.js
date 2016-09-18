import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.handleAuthClick = this.handleAuthClick.bind(this)
    }

    handleAuthClick(){
        this.props.allowUnauth()
    }

    render () {
        return (
            <AppBar 
                title={this.props.title}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                <IconMenu
                    iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Log in" />
                    <MenuItem primaryText="Sign out" />
                    <MenuItem primaryText={this.props.allowUnauth ? "require auth" : "allow unauth" } onClick={this.handleAuthClick}/>
                </IconMenu>
                     }
            />
        )
    }
}

Navbar.propTypes = {
    allowUnauth: PropTypes.func.isRequired
}

export default Navbar