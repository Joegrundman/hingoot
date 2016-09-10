import React from 'react'
import './YelpLogo.css'

const imgUrl = "https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png"

class YelpLogo extends React.Component {
    render () {
        return (
            <div className="YelpLogo">
                <small> Powered by </small><img className="YelpLogo-img" src={imgUrl} />
            </div>
        )
    }
}

export default YelpLogo
