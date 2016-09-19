import React, {PropTypes, Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Listing from '../Listing/Listing'
import './ListingHolder.css'

class ListingHolder extends Component {
    constructor (props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {

     let listings = this.props.results.map((res, i) => (
        <Listing 
          key={i} 
          stats={res}
          needsAuth={this.props.needsAuth}
          fbAuth={this.props.fbAuth} 
        />))

        return (
            <div className="ListingHolder">
                {listings}
            </div>
        )
    }
}

ListingHolder.propTypes = {
    results: PropTypes.array.isRequired,
    needsAuth: PropTypes.bool.isRequired,
    fbAuth: PropTypes.bool.isRequired
}

export default ListingHolder
