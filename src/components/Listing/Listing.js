import React, {PropTypes} from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
// import FacebookHandler from '../FacebookHandler/FacebookHandlerOld'
import FacebookHandler from '../FacebookHandler/FacebookHandlerContainer'
import './Listing.css'


const Listing = ({stats, showFacebook, handleListingClick, allowUnauth, toggleShowFacebook}) => (
           <div className="Listing">  
            <Card>
                {showFacebook ? <FacebookHandler />: null}
                <CardHeader 
                avatar={stats.get('snippet_image_url')}
                title={stats.get('name')}
                subtitle={"Number going: " + (stats.get('votes') || 0)}
                actAsExpander={false} 
                showExpandableButton={false} />
                <CardActions>
                    <FlatButton 
                    primary={true}
                    label={stats.get('isGoing') ? "Not Going?": "Going?"} 
                    onClick={ allowUnauth ? handleListingClick : toggleShowFacebook }/>
                    <a href={stats.get('url')} 
                       target="_blank" >
                        <FlatButton 
                        primary={true}
                        label="Go to Yelp" />
                    </a>
                </CardActions>
                <CardText expandable={false} >
                {stats.get('snippet_text')}
                </CardText>
            </Card>
            <br />
        </div>   
)

Listing.propTypes = {
    stats: PropTypes.object.isRequired, // passed down from ListingContainer
    handleListingClick: PropTypes.func.isRequired,
    toggleShowFacebook: PropTypes.func.isRequired,
    showFacebook: PropTypes.bool.isRequired,
    allowUnauth: PropTypes.bool.isRequired
}

Listing.defaultProps = {
    showFacebook: false,
    allowUnauth: false
}

export default Listing
