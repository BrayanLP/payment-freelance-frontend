import React, { Component } from 'react';
import Table from 'react-materialize/lib/Table'; 
import Icon from 'react-materialize/lib/Icon';

import Pagination from 'react-materialize/lib/Pagination';
import PropTypes from 'prop-types';

// import compose from 'recompose/compose';
import Button from 'react-materialize/lib/Button';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { firebase } from '../../firebase/';
class ProjectList extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentWillMount(){
        this.props.fetchProject();
    }
    handleDelete = (id) =>{
        console.log(id)
        firebase.db.ref(`/proyectos/${id}`).remove()
    }
    render() {
        const { projects } = this.props
        console.log(projects)
        return (
            <div>
                <h2>
                    Listado Proyecto
                </h2>
                <Link className={`btn waves-effect waves-light`} to={'proyectos/crear'}>Crear</Link>
                <Table striped={true}>
                <thead>
                <tr>
                    <th data-field="id">#</th>
                    <th data-field="nombre">Nombre</th>
                    <th data-field="deuda">Deuda</th>
                    <th data-field="acciones">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {projects && projects.map((res, index) => {
                    return (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{res.name}</td>
                        <td>{`S/ ${res.price - res.adelanto}.00`}</td>
                        <td>
                        {/* <Icon>visibility</Icon> */}
                        <Link to={`${res.id}/edit`}><Icon>create</Icon></Link>
                        <a href="#!" onClick={(e) => this.handleDelete(res.id)}><Icon>delete</Icon></a>
                        {/* <Link onClick={this.handleDelete(res.id)}><Icon>delete</Icon></Link> */}
                        </td>
                    </tr>
                    )
                })
                }
                </tbody>
            </Table>
            <Pagination items={10} activePage={2} maxButtons={8} />
            </div>
        );
    }
}

const mapState = state => ({ 
    projects: state.projectModel.projects
  });
  
  // const mapDispatch = dispatch => ({
  //   addByOne: () => dispatch.virtualModel.addBy(1)
  // });
  
  const mapDispatch = ({
    projectModel: { fetchData }
  }) => ({
    fetchProject: () => fetchData(), 
  });
  
  ProjectList.propTypes = {
    projects: PropTypes.array, 
  };
  export default 
    connect(
      mapState,
      mapDispatch
    )(ProjectList);
   