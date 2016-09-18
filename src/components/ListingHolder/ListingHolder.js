import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Listing from '../Listing/Listing'
import './ListingHolder.css'

class ListingHolder extends React.Component {
    constructor (props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render () {

     let listings = this.props.results.map((res, i) => (
        <Listing 
          key={i} 
          stats={res} 
        />))

        return (
            <div className="ListingHolder">
                {listings}
            </div>
        )
    }
}

export default ListingHolder
