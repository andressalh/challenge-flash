import React, { Component, Fragment } from 'react';
import api from '../../services/api';

class Home extends Component {

    state = {
        empresa: [],
        selectedEmpresa: 0,
    }

    
    
    async componentDidMount(){

       await api.get('/empresa').then((res) =>{
            this.setState({empresa: res.data['empresa']});
            console.log(res.data.empresa);
        });

    }
    
    
    render(){

        return (
            
            <Fragment>
               {this.state.empresa ? (
      
                    <div>
                        <label htmlFor="empresa"></label>
                        <select
                        name="empresa"
                        id="empresa"
                        
                        value={this.state.selectedEmpresa}
                        >
                            <option value="" >Selecione uma empresa</option>
                            
                            {this.state.empresa.map(emp => (
                                <option key={emp._id} value={emp.nome}>{emp.nome}</option>
                            ))}
                        </select>
                     
                     </div>)
                 : (<div><h1>Loading</h1></div>)}

                 
            </Fragment>
        )
    }
    
}

export default Home;