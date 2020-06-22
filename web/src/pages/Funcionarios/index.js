import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiArrowLeft} from 'react-icons/fi';

class Home extends Component {

    
    state = {
        funcionarios: [],
        empresa: [],
    }

    async componentDidMount(){

        const { data } = this.props.location;

        await api.get(`/funcionarios/${data}`).then((res) =>{
            this.setState({funcionarios: res.data['funcionario']});
        });
        
        await api.get(`/empresa/${data}`).then((res) =>{
            this.setState({empresa: res.data['empresa']});
            
        });
        
    }
           
    render(){
       
            const data = [];
            
            this.state.funcionarios.map(func => {
                data.push({
                    key: func._id,
                    name: func.nome,
                    sobrenome: func.sobrenome,
                    cpf: func.cpf,
                    email: func.email,
                    emp: func.empresa.nome,
                    
                })                   
            }) 


          const columns = [
            {
                title: 'Nome',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Sobrenome',
                dataIndex: 'sobrenome',
                key: 'sobrenome',
            },
            {
                title: 'CPF',
                dataIndex: 'cpf',
                key: 'cpf',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Empresa',
                dataIndex: 'emp',
                key: 'emp',
            },
          ];

        return (
            
            <Fragment>

            <div className="div-voltar">
            <Link to="/" > 
                <FiArrowLeft/>
                Voltar para home 
            </Link>                           
            </div> 
            <div className="div-title"> <h2>Funcionários - {this.state.empresa.nome}</h2></div>
            
            <Table dataSource={data} columns={columns} />
            
            </Fragment>
        )
    }
    
}

export default Home;