import React from 'react'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'
import './Listing.css'

class Listing extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            votes: 0
        }
    }

    componentDidMount() {
        if(this.props.stats.votes && this.props.stats.votes > 0){
            this.setState({votes: this.props.stats.votes})
        }
    }

    handleClick() {
        console.log('clicked going to', this.props.stats.name)
        axios.get(`/going/${this.props.stats.id}`)
             .then( (data) => {
                 console.log('++++',data.data)
                 var votes = data.data.votes
                 console.log('voted and now at ', votes)
                 this.setState({
                     votes: JSON.parse(votes)
                 })
             })
             .catch( (err) => {
                 console.log(err)
                //  this.setState({
                //      votes: this.state.votes + 1
                //  })
             } )
    }

    render(){
        return (
          <div className="Listing">  
            <Card>
                <CardHeader 
                avatar={this.props.stats.snippet_image_url}
                title={this.props.stats.name}
                subtitle={"going: " + this.state.votes }
                actAsExpander={false} 
                showExpandableButton={false} />
                <CardActions>
                    <FlatButton 
                    primary={true}
                    label="Going?" 
                    onClick={this.handleClick}/>
                    <a href={this.props.stats.url} 
                       target="_blank" >
                        <FlatButton 
                        primary={true}
                        label="Go to Yelp" />
                    </a>

                </CardActions>
                <CardText expandable={false} >
                {this.props.stats.snippet_text}
                </CardText>
            </Card>
            <br />
        </div>
        )
    }
}

export default Listing