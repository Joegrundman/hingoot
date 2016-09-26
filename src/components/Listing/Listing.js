import React, {PropTypes} from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import FacebookHandler from '../FacebookHandler/FacebookHandlerContainer'
import './Listing.css'


const Listing = ({stats, showFacebook, handleListingClick }) => (
           <div className="Listing">  
            <Card>
                {showFacebook ? <FacebookHandler />: null}
                <CardHeader 
                avatar={stats.snippet_image_url}
                title={stats.name}
                subtitle={"Number going: " + (stats.votes || 0)}
                actAsExpander={false} 
                showExpandableButton={false} />
                <CardActions>
                    <FlatButton 
                    primary={true}
                    label={stats.isGoing ? "Not Going?": "Going?"} 
                    onClick={handleListingClick}/>
                    <a href={stats.url} 
                       target="_blank" >
                        <FlatButton 
                        primary={true}
                        label="Go to Yelp" />
                    </a>
                </CardActions>
                <CardText expandable={false} >
                {stats.snippet_text}
                </CardText>
            </Card>
            <br />
        </div>   
)

Listing.propTypes = {
    stats: PropTypes.object.isRequired, // passed down from ListingContainer
    handleListingClick: PropTypes.func.isRequired,
    showFacebook: PropTypes.bool.isRequired
}

Listing.defaultProps = {
    showFacebook: false
}

export default Listing
