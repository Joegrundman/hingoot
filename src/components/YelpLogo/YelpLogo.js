import React from 'react'
import './YelpLogo.css'

const imgUrl = "https://s3-media2.fl.yelpcdn.com/assets/srv0/" + 
    "www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png"

const YelpLogo = () => (
    <div className="YelpLogo">
        <small> Powered by </small>
        <img className="YelpLogo-img" src={imgUrl} alt="Yelp Logo" />
        <br />
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
    </div> 
    )

export default YelpLogo
