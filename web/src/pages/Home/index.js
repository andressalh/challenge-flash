import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        empresa: [],
        selectedEmpresa: '',
    }

    async componentDidMount(){

       await api.get('/empresa').then((res) =>{
            this.setState({empresa: res.data['empresa']});
            
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
                        onChange={ (e) => {this.setState({selectedEmpresa: e.target.value }) }}
                        value={this.state.selectedEmpresa}
                        >
                            
                            <option value="" >Selecione uma empresa</option>
                            
                            {this.state.empresa.map(emp => (            
                               <option key={emp._id} value={emp._id} >{emp.nome}</option>
                            
                            ))}
                            
                        </select>                  
                     <Link to={{
                         pathname: "/funcionarios",
                         data: this.state.selectedEmpresa
                     }}> Pesquisar</Link>
                     </div>)
                 : (<div><h1>Loading</h1></div>)}

                 
            </Fragment>
        )
    }
    
}

export default Home;