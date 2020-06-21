import React, { Component, Fragment } from 'react';
import api from '../../services/api';

class Home extends Component {

    
    state = {
        funcionarios: [],
    }

    async componentDidMount(){

        const { data } = this.props.location;

        await api.get(`/funcionario/${data}`).then((res) =>{
            this.setState({funcionarios: res.data['funcionario']});
            console.log("funcionarios: " +this.state.funcionarios);
            console.log("data: " +data);
        });

    }
            
    render(){
        
        return (
            
            <Fragment>
                {this.state.funcionario ? (
                    
                    <div>
                     {this.state.funcionario.map(func => (
                         <h1>{func.nome}</h1>
                     ))}
                     </div>)
                 : (<div><h1>Loading</h1></div>)}
    
                
    
            </Fragment>
        )
    }
    
}

export default Home;