import React from 'react'
import axios from 'axios'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleSearchChange(e) {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearchSubmit(e) {
        e.preventDefault()
        let searchReq = encodeURIComponent(this.state.searchTerm)
        console.log('clicked and searching for', this.state.searchTerm)
        axios.get(`/yelp/${searchReq}`)
            .then(res => setState({searchTerm: ''}))
            .catch(error => console.log(error))
        

    }


    render () {
        return(
        <div>
            <h2> Fae ya gannin oot the neet ya hingoot?</h2>
            <div>
                <input className="Search-input" type="text" placeholder="location" onChange={this.handleSearchChange} name="location" />
                <button className="Search-submit" onClick={this.handleSearchSubmit}>Submit</button>
            </div>
        </div>
        )
    }
}

export default Search