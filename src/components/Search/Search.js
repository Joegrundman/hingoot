import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import './Search.css'

const style = {
    fontSize: 24,
    marginRight: "1em"
}

const Search = ({onSearchChange, onSearchClick, isFetching, ajaxFail}) => (
    <div className="Search">
        <TextField
            style={style}
            floatingLabelText="location"
            onChange={e => {
                e.preventDefault()
                onSearchChange(e)
            }} />
        <RaisedButton
            onClick={e => {
                e.preventDefault()
                onSearchClick(e)
            }}
            primary={true}
            label="Submit" />
        <br />
        {isFetching ? <CircularProgress /> : null}
        {ajaxFail ? 'Could Not Get Resource': null}
    </div>
)


Search.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    ajaxFail: PropTypes.bool.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func.isRequired
}

Search.defaultProps = {
    isFetching: false,
    ajaxFail: false
}

export default Search