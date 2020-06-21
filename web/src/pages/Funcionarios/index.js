import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Table } from 'antd';
 
class Home extends Component {

    
    state = {
        funcionarios: [],

        
    }

    async componentDidMount(){

        const { data } = this.props.location;

        console.log("data: " +data);
        await api.get(`/funcionarios/${data}`).then((res) =>{
            this.setState({funcionarios: res.data['funcionario']});
            console.log("funcionarios: " +this.state.funcionarios);           
        });
        
        
    }
           
    render(){

             
        
            const data = [];
            
            this.state.funcionarios.map(func => {
                data.push({
                    key: func._id,
                    name: func.nome,
                    email: func.email,
                })                   
            }) 
            

          const columns = [
            {
              title: 'Nome',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
          ];

        return (
            
            <Fragment>
            <Table dataSource={data} columns={columns} />
    
            </Fragment>
        )
    }
    
}

export default Home;