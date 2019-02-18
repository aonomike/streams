import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load("client:auth2", ()=> {
            window.gapi.client.init({
                clientId: '142134660780-c6sea96lgjrmvt0otaulsq3ouiu70dh0.apps.googleusercontent.com',
                scope: 'email'
        })
        });
    }
    render() {
        return (<div>
            Google Auth
        </div>);
    }
}

export default GoogleAuth;