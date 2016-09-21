import React, {PropTypes, Component} from 'react'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'
import FacebookHandler from '../FacebookHandler/FacebookHandler'
import './Listing.css'

class Listing extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            votes: 0,
            isGoing: false,
            showFacebook: false,
        }
    }

    componentDidMount() {
        if(this.props.stats.votes && this.props.stats.votes > 0){
            this.setState({votes: this.props.stats.votes})
        }
        //TODO: get local storage, check time and see if already obsolete. 
        //if so remove local storage element
        //otherwise read and set state in Listing
    }


    handleClick() {
        // TODO: check to see if authenticated
        // if not auth got to fb login (or use unauthorised)
        // if auth, check to see if already voted. If so, decrement
        // otherwise increment
        if (!this.props.needsAuth || this.props.fbAuth ) {
            this.setState({
                showFacebook: false
            })
            if (this.state.isGoing) {
                this.callServer('notgoing')
            } else {
                this.callServer('going')
            }

        } else {
            this.setState({
                showFacebook: true
            })
        }

      
    }

    callServer (target) {
        // new date getTimezoneOffset returns minutes and with ahead as minus
        const tz = -(new Date().getTimezoneOffset() /60) 
 
        axios.get(`/${target}/${this.props.stats.id}.${tz}`)
             .then(data => {
                //  console.log('++++',data.data)
                 var votes = data.data.votes
                //  console.log('voted and now at ', votes)

                //TODO: add local storage on already voted and time

                if(target === 'going'){
                    this.setState({
                        votes: JSON.parse(votes),
                        isGoing: true
                    })
                } else if (target === 'notgoing') {
                    this.setState({
                        votes: JSON.parse(votes),
                        isGoing: false
                    })
                }

             })
             .catch( (err) => {
                 console.log(err)
                 console.log('going clicked')
                 // remove from production

             } )
    }

    render(){
        return (
          <div className="Listing">  
            <Card>
                {this.state.showFacebook ? <FacebookHandler 
                    onFbLogin={this.props.onFbLogin} 
                    toggleAllowUnauth={this.props.toggleAllowUnauth} />: null}
                <CardHeader 
                avatar={this.props.stats.snippet_image_url}
                title={this.props.stats.name}
                subtitle={"going: " + this.state.votes }
                actAsExpander={false} 
                showExpandableButton={false} />
                <CardActions>
                    <FlatButton 
                    primary={true}
                    label={this.state.isGoing ? "Not Going?": "Going?"} 
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

Listing.propTypes = {
    stats: PropTypes.object.isRequired,
    needsAuth: PropTypes.bool.isRequired,
    fbAuth: PropTypes.bool.isRequired,
    toggleAllowUnauth: PropTypes.func.isRequired,
    onFbLogin: PropTypes.func.isRequired
}

export default Listing