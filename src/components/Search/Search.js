import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
    }

    handleSearchChange(e) {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearchClick(e) {
        e.preventDefault()
        let searchReq = encodeURIComponent(this.state.searchTerm)
        axios.get(`/yelp/${searchReq}`)
            .then(res => {
                console.log('success search')
                this.props.onGetSearchResults(res)
                this.setState({searchTerm: ''})})
            .catch(error => {
                this.props.onGetSearchResults()
                console.log(error)
            })
    }

    render () {

        const style = {
            fontSize: 24,
            marginRight: "1em"
        }

        return (
            <div className="Search">
                <TextField
                    style={style}
                    floatingLabelText="location"
                    onChange={this.handleSearchChange}
                    value={this.state.searchTerm} />
                <RaisedButton
                    onClick={this.handleSearchClick}
                    primary={true}
                    label="Submit" />
            </div>
        )
    }
}

export default Search