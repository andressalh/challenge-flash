import React, { Component } from 'react';
import api from '../../services/api';


class Home extends Component {

    componentDidMount(){

        try {
            console.log("entrou")
            api.get('/empresa').then((res) =>{
                console.log("entrosu")
                console.log(res);
            });
            
          } catch (error) {
            console.error(error);
          }

    }
    render(){

        return (
            <div id="page-home">
                <h1>Teste</h1>
    
            </div>
        )
    }
    
}

export default Home;