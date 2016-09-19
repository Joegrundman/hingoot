import React from 'react'
import FacebookLogin from 'react-facebook-login'

class FacebookHandler extends React.Component {
    constructor(props, context){
        super (props, context)
        this.componentClicked = this.componentClicked.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook(response) {
        console.log(response)
    }

    componentClicked(){
        console.log('clicked')
    }

    render () {
        const fb = (<FacebookLogin 
                    appId="1578557435779440"
                    scope="public_profile,email"
                    autoLoad={true}
                    size="small"
                    fields="name, email, picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    />)
        return (
            <div>
                {fb}
            </div>
        )
    }
}

export default FacebookHandler