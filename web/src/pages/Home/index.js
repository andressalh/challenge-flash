import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

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

        /*function handleSubimit(id) {
           
            
        }*/
        return (
            
            <Fragment>
                <div className="div-home">
                    {this.state.empresa ? (
      
                        <div className="div-procurar">
                            <h2>Selecione uma empresa para ver a relacão de funcionários: </h2>
                            <form>
                                <label htmlFor="empresa"></label>
                                <select
                                name="empresa"
                                id="empresa"
                                useref="empresaSelected"
                                onChange={ (e) => {this.setState({selectedEmpresa: e.target.value }) }}
                                value={this.state.selectedEmpresa}
                                required
                                >
                                    
                                    <option value="" >Todas Empresas</option>
                                    
                                    {this.state.empresa.map(emp => (            
                                    <option key={emp._id} value={emp._id} >{emp.nome}</option>
                                    
                                    ))}
                                    
                                </select> 
                                
                                
                                
                                
                                <Link to={{
                                pathname: "/funcionarios",
                                data: this.state.selectedEmpresa,
                                }}> 
                                
                                <button type="submit">Ver funcionários</button>
                                </Link>
                               


                            </form>
                            
                        </div>)
                        : (<div><h1>Loading</h1></div>)}
                </div>
                 
            </Fragment>
        )
    }
    
}

export default Home;