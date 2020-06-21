import React, { Component, Fragment } from 'react';
import api from '../../services/api';

class Home extends Component {

    state = {
        empresa: [],
    }

    async componentDidMount(){

       await api.get('/empresa').then((res) =>{
            this.setState({empresa: res.data['empresa']});
            console.log(res.data.empresa);
        });

    }

    render(){
        console.log("empresa: " +this.state.empresa);
        return (
            
            <Fragment>
                
                {this.state.empresa ? (
                    
                   <div>
                    {this.state.empresa.map(emp => (
                        <h1>{emp.nome}</h1>
                    ))}
                    </div>)
                : (<div><h1>Loading</h1></div>)}
                
    
            </Fragment>
        )
    }
    
}

export default Home;