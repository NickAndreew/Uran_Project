import React, { Component } from 'react';
import axios from 'axios';

class AlbumsView extends Component {
    render() {
        return (
            <div className = "AlbumsView nav-bar">
                <button onClick={() => {
                    
                    // window.location = "https://www.instagram.com/oauth/authorize/?client_id=f63560f0053148a4b4c4b583bdc338ea&redirect_uri=https://uran-project.herokuapp.com/&response_type=token";
                    axios.get("https://www.instagram.com/oauth/authorize/?client_id=f63560f0053148a4b4c4b583bdc338ea&redirect_uri=https://uran-project.herokuapp.com/&response_type=token").then(function(response){
                        console.log(response);
                     
                        // window.onload(function () {
                        //     var accessToken = window.location.href;
                        //     console.log(accessToken);
                        //     console.log("loaded");
                        // });
                    });

                }}>Login or Sign Up to Instagram</button>
            </div>
        );
    }
}

export default AlbumsView;
