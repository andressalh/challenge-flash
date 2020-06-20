import React, { Component } from 'react';
import api from '../../services/api';

class Home extends Component {

    render(){

        api.get('/empresa').then(response => {
            console.log(response.data);
        });
        
        return (
            <div id="page-home">
                <h1>Teste</h1>
    
            </div>
        )
    }
    
}

export default Home;