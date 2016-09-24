import React, {PropTypes, Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import axios from 'axios'
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingAjax: false,
            searchTerm: '',
            couldNotFind: false
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
    }

    handleSearchChange(e) {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.value,
            couldNotFind: false

        })
    }

    handleSearchClick(e) {
        e.preventDefault()
        let searchReq = encodeURIComponent(this.state.searchTerm)
        if(!searchReq || searchReq == '') { return }

        this.props.removeListings()
        axios.get(`/yelp/${searchReq}`)
            .then(res => {

                this.setState({
                    loadingAjax: false,
                    searchTerm: ''
                }, this.props.onGetSearchResults(res))
            })
            .catch(error => {
                // simulates ajax delay - remove timeout function for production
                // setTimeout(() => {
  
                //     this.setState({
                //         loadingAjax: false,
                //         searchTerm: ''
                //     },  this.props.onGetSearchResults())

                // }, 2000)
                this.setState({
                    loadingAjax: false,
                    searchTerm: '',
                    couldNotFind: true
                })
                console.log(error)
            })
        this.setState({loadingAjax:true})
        
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
                    <br />
                {this.state.loadingAjax ? <CircularProgress /> : null}
                {this.state.couldNotFind ? 'Could Not Find Resource' : null}
            </div>
        )
    }
}

Search.propTypes = {
    removeListings: PropTypes.func.isRequired,
    onGetSearchResults: PropTypes.func.isRequired
}

export default Search