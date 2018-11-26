import React, { Component } from 'react';
import Table from 'react-materialize/lib/Table'; 
import Icon from 'react-materialize/lib/Icon';

import Pagination from 'react-materialize/lib/Pagination';
import PropTypes from 'prop-types';

// import compose from 'recompose/compose';
import Button from 'react-materialize/lib/Button';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class ProjectList extends Component {
    componentWillMount(){
        this.props.fetchProject();
    }
    render() {
        const { projects } = this.props
        console.log(projects)
        return (
            <div>
                <h1>
                    Listado Proyecto
                </h1>
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
                        <td>{res.price}</td>
                        <td>
                        <Icon>visibility</Icon>
                        <Icon>create</Icon>
                        <Icon>delete</Icon>
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
   