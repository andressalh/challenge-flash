import React, { Component } from 'react';


class Home extends Component {

    state = {
        url: 'http://localhost:3000',
        pokemon: null
      };

      async componentDidMount(){
          const res = await axios.get(this.state.url);
          
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