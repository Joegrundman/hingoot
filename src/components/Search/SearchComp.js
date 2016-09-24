import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import './Search.css'

const style = {
    fontSize: 24,
    marginRight: "1em"
}

const Search = ({onSearchChange, onSearchClick, loadingAjax, couldNotFind}) => (
    <div className="Search">
        <TextField
            style={style}
            floatingLabelText="location"
            onChange={e => {
                e.preventDefault()
                onSearchChange()
            }} />
        <RaisedButton
            onClick={e => {
                e.preventDefault()
                onSearchClick()
            }}
            primary={true}
            label="Submit" />
        <br />
        {this.props.loadingAjax ? <CircularProgress /> : null}
        {this.props.ajaxFail ? 'Could Not Get Resource': null}
    </div>
)

Search.propTypes = {
    loadingAjax: PropTypes.bool.isRequired,
    ajaxFail: PropTypes.bool.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func.isRequired
}

export default Search