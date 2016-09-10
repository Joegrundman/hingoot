import React from 'react'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import './Listing.css'

class Listing extends React.Component {
    render(){
        return (
          <div className="Listing">  
            <Card>
                <CardHeader 
                title={this.props.name}
                actAsExpander={true} 
                showExpandableButton={true} />
                <CardActions>
                    <FlatButton 
                    primary={true}
                    label="Going?" />
                    <FlatButton 
                    primary={true}
                    label="Go to Yelp" />

                </CardActions>
                <CardText expandable={true} >
                {this.props.snippet}
                </CardText>
            </Card>
            <br />
        </div>
        )
    }
}

export default Listing